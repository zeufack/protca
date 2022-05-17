Feature: To Login in to ZTrain web application

    @CucumberScenario
    Scenario: Cucumber Google Search
        Given I am on "ztrain" login page
        When I type email "cucumber"
        When I type password ""
        When I click on login button
# Then I clear the search text