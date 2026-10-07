from rest_framework import serializers
from .models import Project, TechStack


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