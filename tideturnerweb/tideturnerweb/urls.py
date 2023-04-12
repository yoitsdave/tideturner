"""tideturnerweb URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.urls import include, path, re_path
from django.conf import settings
from rest_framework import routers
from tideturnerweb import views

if settings.ADMIN_SITE_ON:
    from django.contrib import admin

router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'machines', views.WashingMachineSettingViewSet)
router.register(r'filters', views.MicroplasticFilterViewSet)
router.register(r'runs', views.WashingMachineRunViewSet)
router.register(r'follow', views.FollowingViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
    # path('accounts/', include('django.contrib.auth.urls')),
    re_path(r'^auth/', include('drf_social_oauth2.urls', namespace='drf'))
] + ([path('admin/', admin.site.urls)] if settings.ADMIN_SITE_ON else []) 

