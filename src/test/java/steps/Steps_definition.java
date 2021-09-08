package steps;

import org.openqa.selenium.*;
import org.openqa.selenium.support.PageFactory;

import browser.Browser_run;
import cucumber.api.java.en.*;
import pages.Login_page;

public class Steps_definition {
	WebDriver driver;
	Login_page login;
	
	@Given("^user click on chrome browser$")
	public void user_click_on_chrome_browser() throws Throwable  {
		driver = Browser_run.run_browser();
		
	   
	}

	@When("^user will enter username as \"([^\"]*)\"$")
	public void user_will_enter_username_as(String username)  {
		 login = PageFactory.initElements(driver, Login_page.class);
		 login.USERNAME(username);
	}

	@When("^user will enter password as \"([^\"]*)\"$")
	public void user_will_enter_password_as(String password)  {
	    login.PASSWROD(password);
	}
	
	@When("^user will click on submit$")
	public void user_will_click_on_submit() {
		
		login.SUBMIT();
	   
	}

	@When("^user will land on techfios Dashboard page$")
	public void user_will_land_on_techfios_Dashboard_page() {
	  login.verify_dashboard_page();
	}
	  
	  @Then("^user will not be able to land on dashboard page$")
	  public void user_will_not_be_able_to_land_on_dashboard_page() throws Throwable {
	     
	 login.verify_invalid_credentials();
	}

	@And("^user will close the browser$")
	public void user_will_close_the_browser() throws Throwable {
		 driver = Browser_run.close_browser();
	}
}
