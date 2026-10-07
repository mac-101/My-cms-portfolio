from django.urls import reverse
from rest_framework import serializers
from .models import Project, Resume, TechStack


class TechStackSerializer(serializers.ModelSerializer):
    class Meta:
        model = TechStack
        fields = ["id", "name", "slug"]


class ProjectSerializer(serializers.ModelSerializer):
    tech_stack = TechStackSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        fields = [
            "id",
            "title",
            "slug",
            "category",
            "description",
            "image",
            "tech_stack",
            "github_url",
            "live_url",
            "featured",
            "published",
        ]


class ResumeSerializer(serializers.ModelSerializer):
    download_url = serializers.SerializerMethodField()

    class Meta:
        model = Resume
        fields = ["file", "download_url", "updated_at"]

    def get_download_url(self, obj):
        request = self.context.get("request")
        url = reverse("resume-download")
        return request.build_absolute_uri(url) if request else url