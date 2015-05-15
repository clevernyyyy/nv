from django.conf.urls import include, url
from django.contrib import admin
admin.autodiscover()

#Django Rest Framework
from rest_framework import routers
from webapp import views

#REST API routes
router = routers.DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'groups', views.GroupViewSet)
router.register(r'permissions', views.PermissionViewSet)
router.register(r'login', views.LoginViewSet)
#router.register(r'contentitems', views.ContentItemViewSet)

urlpatterns = [
    # Examples:
    # url(r'^$', 'envy.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),

    #REST API
    url(r'^api/', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework')),

    #EMBER
    url(r'^login/', views.Login.as_view({'get':'list'})),
]
