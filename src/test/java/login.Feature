Feature: validate login page

Background: user is on techfios login page

  Given user click on chrome browser 
  @login_with_valid_credentials
  Scenario: 1 user will be able to land on techfios website
 
 When user will enter username as "demo@techfios.com" 
 When user will enter password as "abc123" 
 When user will click on submit   
 Then user will land on techfios Dashboard page
 And user will close the browser
 
 @login_with_Wrong_username
 Scenario: 2 user will be able to land on techfios website
  When user will enter username as "demo@techfios" 
 When user will enter password as "abc123" 
 When user will click on submit   
 When user will not be able to land on dashboard page
 And user will close the browser
 
 
 @login_with_Wrong_password
 Scenario: 3 user will be able to land on techfios website
  When user will enter username as "demo@techfios.com" 
 When user will enter password as "abc12" 
 When user will click on submit   
Then user will not be able to land on dashboard page
 And user will close the browser
 
 
 
 @login_with_Wrong_username_and_Wrong_password
 Scenario: 4 user will be able to land on techfios website
  When user will enter username as "demo@techfios" 
 When user will enter password as "abc13" 
 When user will click on submit   
Then user will not be able to land on dashboard page
 And user will close the browser