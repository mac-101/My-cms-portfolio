from rest_framework.routers import DefaultRouter
from django.urls import include, path
from .views import ProjectViewSet, ResumeDownloadView, ResumeView, TechStackViewSet

router = DefaultRouter()

router.register("projects", ProjectViewSet, basename="project")
router.register("tech-stacks", TechStackViewSet, basename="tech-stack")

urlpatterns = [
    path("", include(router.urls)),
    path("resume/", ResumeView.as_view(), name="resume"),
    path("resume/download/", ResumeDownloadView.as_view(), name="resume-download"),
]