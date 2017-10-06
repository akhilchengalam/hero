from django.conf.urls import url, include
from heroes import views
from rest_framework.urlpatterns import format_suffix_patterns
from heroes.views import HeroViewSet
from rest_framework import renderers
from rest_framework.routers import DefaultRouter
from user.views import UserViewSet
from rest_framework import routers


router = routers.SimpleRouter()
router.register(r'heroes', views.HeroViewSet)
router.register(r'accounts', UserViewSet)

urlpatterns = [
    url(r'^search/(?P<name>[-\w]+)/$', views.HeroSearch.as_view()),
    url(r'^rest-auth/', include('rest_auth.urls')),
    url(r'^rest-auth/registration/', include('rest_auth.registration.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

urlpatterns = urlpatterns+router.urls

# urlpatterns = [
#     url(r'^$', views.herolist),
#     url(r'^herolist/$', views.herolist),
#     url(r'^hero/(?P<pk>[0-9]+)/$', views.herodetail),
# ]

# herolist = HeroViewSet.as_view({
#     'get': 'list',
#     'post': 'create'
# })
# herodetail = HeroViewSet.as_view({
#     'get': 'retrieve',
#     'put': 'update',
#     'patch': 'partial_update',
#     'delete': 'destroy'
# })
#
# urlpatterns = [
#     url(r'^herolist/$', herolist),
#     url(r'^hero/(?P<pk>[0-9]+)/$', herodetail),
# ]
