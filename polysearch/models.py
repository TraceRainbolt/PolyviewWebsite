# This is an auto-generated Django model module.
# You'll have to do the following manually to clean this up:
#   * Rearrange models' order
#   * Make sure each model has one field with primary_key=True
#   * Make sure each ForeignKey has `on_delete` set to the desired behavior.
#   * Remove `managed = False` lines if you wish to allow Django to create, modify, and delete the table
# Feel free to rename the models, but don't rename db_table values or field names.
from __future__ import unicode_literals

from django.db import models
import form_data

class Descriptions(models.Model***REMOVED***:
    course = models.CharField(primary_key=True, max_length=10***REMOVED***
    description = models.CharField(max_length=100, blank=True, null=True***REMOVED***

    class Meta:
        managed = False
        db_table = 'descriptions'

class Sections(models.Model***REMOVED***:
    class_field = models.IntegerField(db_column='class', primary_key=True***REMOVED***  # Field renamed because it was a Python reserved word.
    course = models.CharField(max_length=10***REMOVED***
    course_num = models.CharField(max_length=10***REMOVED***
    sec_num = models.IntegerField(***REMOVED***
    type = models.CharField(max_length=3, blank=True, null=True***REMOVED***
    instructor = models.CharField(max_length=50, blank=True, null=True***REMOVED***
    available = models.IntegerField(blank=True, null=True***REMOVED***
    taken = models.IntegerField(blank=True, null=True***REMOVED***
    waiting = models.IntegerField(blank=True, null=True***REMOVED***
    status = models.CharField(max_length=20, blank=True, null=True***REMOVED***
    days = models.CharField(max_length=5, blank=True, null=True***REMOVED***
    start = models.TimeField(blank=True, null=True***REMOVED***
    end = models.TimeField(blank=True, null=True***REMOVED***
    building = models.CharField(max_length=30, blank=True, null=True***REMOVED***
    room = models.CharField(max_length=10, blank=True, null=True***REMOVED***
    rating = models.DecimalField(max_digits=3, decimal_places=2, blank=True, null=True***REMOVED***
    course_combined = models.ForeignKey(Descriptions, models.DO_NOTHING, db_column='course_combined', blank=True, null=True***REMOVED***

    class Meta:
        managed = False
        db_table = 'sections'
        ordering = ['course', 'course_num', 'sec_num'***REMOVED***