package pages;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;
import static org.junit.Assert.assertSame;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.testng.asserts.SoftAssert;

import net.bytebuddy.matcher.EqualityMatcher;

public class Login_page {
	WebDriver driver;
	
	SoftAssert soft = new SoftAssert();
	
	public Login_page(WebDriver driver) {
		this.driver = driver;
	}

	@FindBy(how = How.XPATH, using = "//*[@id=\"username\"]")
	WebElement USERNAME_FIELD;
	@FindBy(how = How.XPATH, using = "//*[@id=\"password\"]")
	WebElement PASSWORD_FIELD;
	@FindBy(how = How.XPATH, using = "/html/body/div/div/div/form/div[3]/button")
	WebElement SUBMIT_BUTTON;
	@FindBy (how = How.XPATH, using = "//*[@id=\"side-menu\"]/li[2]/a/span")
	WebElement DASHBOARD_PAGE;

	public void USERNAME(String username) {

		USERNAME_FIELD.sendKeys(username);
	}

	public void PASSWROD(String password) {

		PASSWORD_FIELD.sendKeys(password);
	}

	public void SUBMIT() {
		
		SUBMIT_BUTTON.click();
	}
	
	public void verify_dashboard_page (){
		String Message  = "You are on the long page";
		
		String expected = "Dashboard";
		
		String actual = DASHBOARD_PAGE.getText();
		String title = driver.getTitle();
		
		soft.assertEquals(expected,actual, Message);
		soft.assertEquals(actual,expected, Message);
	
	System.out.println(expected + "   "+ actual+" "+title);

	
	
	}
	
	public void verify_invalid_credentials(){
		
		String Message  = "The username or password mgiht be incorect";
		
		String expected1 = "Dashboard- iBilling";
		
		String actual1 = driver.getTitle();
		
	//soft.assertEquals(expected1,actual1);
		soft.assertEquals(actual1,expected1, Message);
	
	System.out.println(expected1 + "   "+ actual1);
	
	


	
	
	}

}
