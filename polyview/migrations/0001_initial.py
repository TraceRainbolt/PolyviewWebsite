# -*- coding: utf-8 -*-
# Generated by Django 1.11 on 2017-08-17 03:39
from __future__ import unicode_literals

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration***REMOVED***:

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL***REMOVED***,
        ('polysearch', '0001_initial'***REMOVED***,
    ***REMOVED***

    operations = [
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'***REMOVED******REMOVED***,
                ('followed', models.ManyToManyField(blank=True, to='polysearch.Courses'***REMOVED******REMOVED***,
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL***REMOVED******REMOVED***,
            ***REMOVED***,
        ***REMOVED***,
    ***REMOVED***
