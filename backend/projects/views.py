from pathlib import Path

from django.http import FileResponse
from rest_framework import viewsets
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Project, Resume, TechStack
from .serializers import ProjectSerializer, ResumeSerializer, TechStackSerializer


class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.filter(published=True).prefetch_related("tech_stack")
    serializer_class = ProjectSerializer


class TechStackViewSet(viewsets.ModelViewSet):
    queryset = TechStack.objects.filter(
        projects__published=True
    ).distinct().order_by("name")
    serializer_class = TechStackSerializer


class ResumeView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        resume = Resume.objects.filter(pk=1).first()
        if resume is None or not resume.file:
            return Response({"detail": "Resume is not available."}, status=404)
        return Response(ResumeSerializer(resume, context={"request": request}).data)


class ResumeDownloadView(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        resume = Resume.objects.filter(pk=1).first()
        if resume is None or not resume.file:
            return Response({"detail": "Resume is not available."}, status=404)
        return FileResponse(
            resume.file.open("rb"),
            as_attachment=True,
            filename=Path(resume.file.name).name,
        )