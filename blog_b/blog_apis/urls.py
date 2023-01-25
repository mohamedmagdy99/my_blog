from blog_apis import views
from rest_framework import routers
from django.urls import path

router =routers.DefaultRouter()

router.register(r'Image',
                views.PersonalImageList, basename='Image')

urlpatterns = router.urls