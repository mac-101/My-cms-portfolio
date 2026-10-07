from rest_framework.routers import DefaultRouter
from .views import ProjectViewSet, TechStackViewSet

router = DefaultRouter()

router.register("projects", ProjectViewSet, basename="project")
router.register("tech-stacks", TechStackViewSet, basename="tech-stack")

urlpatterns = router.urls