Feature: Get Users
  Background:
    * url 'http://localhost:8080'
  Scenario: Get the information of all the users

    Given path '/'
    When method get
    Then status 200