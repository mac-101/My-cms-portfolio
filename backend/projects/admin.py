from django.contrib import admin
from .models import Project, TechStack


@admin.register(TechStack)
class TechStackAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("name",)}


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    prepopulated_fields = {"slug": ("title",)}
    list_display = ("title", "category", "featured", "published")
    list_filter = ("category", "featured", "published")
    filter_horizontal = ("tech_stack",)