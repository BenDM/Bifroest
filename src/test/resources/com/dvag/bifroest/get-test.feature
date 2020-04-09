Feature: Get Users
  Background:
    * url 'https://www.google.de'
  Scenario: Get the information of all the users

    Given path ''
    When method get
    Then status 201