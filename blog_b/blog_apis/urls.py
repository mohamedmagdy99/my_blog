from blog_apis import views
from rest_framework import routers

router =routers.DefaultRouter()

router.register(r'Image',
                views.PersonalImageList, basename='Image')
router.register(r'Tech',
                views.TechList, basename='Tech')
router.register(r'Blog',
                views.BlogPostList, basename='BlogPost')

urlpatterns = router.urls
