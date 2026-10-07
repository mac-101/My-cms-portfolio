from django.core.validators import FileExtensionValidator
from django.db import models


class TechStack(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    title = models.CharField(max_length=200)
    slug = models.SlugField(unique=True)
    category = models.CharField(max_length=100, default="Uncategorized")
    description = models.TextField()
    image = models.ImageField(upload_to="projects/", blank=True, null=True)

    tech_stack = models.ManyToManyField(
        TechStack,
        related_name="projects",
        blank=True
    )

    github_url = models.URLField(blank=True)
    live_url = models.URLField(blank=True)
    featured = models.BooleanField(default=False)
    published = models.BooleanField(default=True)

    def __str__(self):
        return self.title


class Resume(models.Model):
    file = models.FileField(
        upload_to="resumes/",
        validators=[FileExtensionValidator(allowed_extensions=["pdf"])],
    )
    updated_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        self.pk = 1
        super().save(*args, **kwargs)

    def __str__(self):
        return "Resume"