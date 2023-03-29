from django.contrib.auth.models import User
from tideturnerweb.models import WashingMachineSetting, MicroplasticFilter, WashingMachineRun, Following
from rest_framework import viewsets
from rest_framework import permissions
from tideturnerweb.serializers import UserSerializer, WashingMachineSettingSerializer, MicroplasticFilterSerializer, WashingMachineRunSerializer, FollowingSerializer


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

class WashingMachineSettingViewSet(viewsets.ModelViewSet):
    queryset = WashingMachineSetting.objects.all().order_by("-created_on")
    serializer_class = WashingMachineSettingSerializer
    permission_classes = [permissions.IsAuthenticated]

class MicroplasticFilterViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = MicroplasticFilter.objects.all().order_by("-created_on")
    serializer_class = MicroplasticFilterSerializer
    permission_classes = [permissions.IsAuthenticated]

class WashingMachineRunViewSet(viewsets.ModelViewSet):
    queryset = WashingMachineRun.objects.all().order_by("-started")
    serializer_class = WashingMachineRunSerializer
    permission_classes = [permissions.IsAuthenticated]

class FollowingViewSet(viewsets.ModelViewSet):
    queryset = Following.objects.all()
    serializer_class = FollowingSerializer
    permission_classes = [permissions.IsAuthenticated]

