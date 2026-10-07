from django.contrib import admin
from .models import Project, Resume, TechStack


@admin.register(TechStack)
class TechStackAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = ("title", "category", "featured", "published")
    list_filter = ("category", "featured", "published")
    filter_horizontal = ("tech_stack",)


@admin.register(Resume)
class ResumeAdmin(admin.ModelAdmin):
    list_display = ("file", "updated_at")
    readonly_fields = ("updated_at",)

    def has_add_permission(self, request):
        return not Resume.objects.filter(pk=1).exists()

    def has_delete_permission(self, request, obj=None):
        return False