$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Alain Mickey/Desktop/All Java project____eclipse/maven projects/DATA_DRIVEN (for submission)/BDD_review/src/test/java/login.Feature");
formatter.feature({
  "line": 1,
  "name": "validate login page",
  "description": "",
  "id": "validate-login-page",
  "keyword": "Feature"
});
formatter.background({
  "line": 3,
  "name": "user is on techfios login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user click on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_definition.user_click_on_chrome_browser()"
});
formatter.result({
  "duration": 6386744700,
  "status": "passed"
});
formatter.scenario({
  "line": 7,
  "name": "1 user will be able to land on techfios website",
  "description": "",
  "id": "validate-login-page;1-user-will-be-able-to-land-on-techfios-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 6,
      "name": "@login_with_valid_credentials"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "user will enter username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "user will enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user will click on submit",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "user will land on techfios Dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "user will close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_username_as(String)"
});
formatter.result({
  "duration": 216655300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_password_as(String)"
});
formatter.result({
  "duration": 124164200,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_click_on_submit()"
});
formatter.result({
  "duration": 1659804800,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_land_on_techfios_Dashboard_page()"
});
formatter.result({
  "duration": 68711500,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_close_the_browser()"
});
formatter.result({
  "duration": 3858227800,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on techfios login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user click on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_definition.user_click_on_chrome_browser()"
});
formatter.result({
  "duration": 3928468400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "2 user will be able to land on techfios website",
  "description": "",
  "id": "validate-login-page;2-user-will-be-able-to-land-on-techfios-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 15,
      "name": "@login_with_Wrong_username"
    }
  ]
});
formatter.step({
  "line": 17,
  "name": "user will enter username as \"demo@techfios\"",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "user will enter password as \"abc123\"",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user will click on submit",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user will not be able to land on dashboard page",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "user will close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_username_as(String)"
});
formatter.result({
  "duration": 119375700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc123",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_password_as(String)"
});
formatter.result({
  "duration": 96205800,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_click_on_submit()"
});
formatter.result({
  "duration": 1054763200,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_not_be_able_to_land_on_dashboard_page()"
});
formatter.result({
  "duration": 11793600,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_close_the_browser()"
});
formatter.result({
  "duration": 3758446200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on techfios login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user click on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_definition.user_click_on_chrome_browser()"
});
formatter.result({
  "duration": 3420417900,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "3 user will be able to land on techfios website",
  "description": "",
  "id": "validate-login-page;3-user-will-be-able-to-land-on-techfios-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@login_with_Wrong_password"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user will enter username as \"demo@techfios.com\"",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "user will enter password as \"abc12\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user will click on submit",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "user will not be able to land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "user will close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios.com",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_username_as(String)"
});
formatter.result({
  "duration": 135373500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc12",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_password_as(String)"
});
formatter.result({
  "duration": 88153500,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_click_on_submit()"
});
formatter.result({
  "duration": 1111035300,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_not_be_able_to_land_on_dashboard_page()"
});
formatter.result({
  "duration": 9487500,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_close_the_browser()"
});
formatter.result({
  "duration": 3748204200,
  "status": "passed"
});
formatter.background({
  "line": 3,
  "name": "user is on techfios login page",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "user click on chrome browser",
  "keyword": "Given "
});
formatter.match({
  "location": "Steps_definition.user_click_on_chrome_browser()"
});
formatter.result({
  "duration": 3495283900,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "4 user will be able to land on techfios website",
  "description": "",
  "id": "validate-login-page;4-user-will-be-able-to-land-on-techfios-website",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@login_with_Wrong_username_and_Wrong_password"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user will enter username as \"demo@techfios\"",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "user will enter password as \"abc13\"",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "user will click on submit",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "user will not be able to land on dashboard page",
  "keyword": "Then "
});
formatter.step({
  "line": 40,
  "name": "user will close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "demo@techfios",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_username_as(String)"
});
formatter.result({
  "duration": 118184800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abc13",
      "offset": 29
    }
  ],
  "location": "Steps_definition.user_will_enter_password_as(String)"
});
formatter.result({
  "duration": 99702700,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_click_on_submit()"
});
formatter.result({
  "duration": 1153246000,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_not_be_able_to_land_on_dashboard_page()"
});
formatter.result({
  "duration": 11783500,
  "status": "passed"
});
formatter.match({
  "location": "Steps_definition.user_will_close_the_browser()"
});
formatter.result({
  "duration": 3724164200,
  "status": "passed"
});
});