from django.contrib.auth.models import User, Group
from tideturnerweb.models import WashingMachineSetting, MicroplasticFilter, WashingMachineRun, Following
from rest_framework import serializers

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['url', 'username', 'email', 'groups', "followers", "following", "runs"]

class WashingMachineSettingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WashingMachineSetting
        fields = ["machine_name", "setting_name", "water_capacity", "duration", "created_on", "runs"]

class MicroplasticFilterSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = MicroplasticFilter
        fields = ["filter_name", "created_on", "mp_ratio", "runs"]

class WashingMachineRunSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = WashingMachineRun
        fields = ["owner", "setting", "filter", "started", "notified"]

class FollowingSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Following
        fields = ["follower", "followed"]