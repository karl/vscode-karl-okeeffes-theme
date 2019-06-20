Feature: Tutor Recruitment Login Scenarios

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:POSITIVE - Login with VALID details
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <validEmail> |
      | Password | <pText>      |
    When User click on "LOGIN" button on TR login page
#    Then User should be loggedIn and 5 stages message should be present on all sections
    And User should able to log out
    Examples:
      | validEmail                  | pText    |
      | jai.gogineni+user2@matr.org | tutor123 |

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:NEGATIVE - Login with INVALID UserName or Password and Verify it should get an errorMessage
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <validEmail> |
      | Password | <pText>      |
    When User click on "LOGIN" button on TR login page
    Then User should not be login and errorMessage should be displayed as <errorMessage> on TR Login Page

    Examples:
      | validEmail                  | pText           | errorMessage                    |
      | jai.gogineni+user2@matr.org | invalidPassword | "Invalid username or password." |
      | invalidUsername@matr.org    | tutor123        | "Invalid username or password." |

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:NEGATIVE - Login withOut PASSWORD [Mandatory field] and Verify it highlighted as error
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <validEmail> |
      | Password | <emptyText>  |
    When User click on "LOGIN" button on TR login page
    Then User should get highlighted "Password" as error on TR login page

    Examples:
      | validEmail                  | emptyText |
      | matrtestautomation@matr.org |           |

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:NEGATIVE - Login withOut EMAIL [Mandatory field] and Verify it highlighted as error
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <validEmail> |
      | Password | <emptyText>  |
    When User click on "LOGIN" button on TR login page
    Then User should get highlighted "Email" as error on TR login page

    Examples:
      | validEmail | emptyText     |
      |            | validPassword |

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:NEGATIVE - Login withOut EMAIL and PASSWORD [Mandatory field] and Verify it highlighted as error
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <emptyText> |
      | Password | <emptyText> |
    When User click on "LOGIN" button on TR login page
    Then User should get highlighted "Email" as error on TR login page
    Then User should get highlighted "Password" as error on TR login page

    Examples:
      | emptyText |
      |           |

  @tutorRecruitment @tutorRecruitmentSmokeProd @trLogin
  Scenario Outline:NEGATIVE - Login with INVALID EMAIL FORMAT and Verify it highlighted as error
    Given User navigate to TR login page
    And User enter the following TR login details
      | Email    | <validEmail> |
      | Password | <emptyText>  |
    When User click on "LOGIN" button on TR login page
    Then User should get highlighted "Email" as error on TR login page

    Examples:
      | validEmail | emptyText     |
      | dfdfd      | validPassword |
