package browser;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Properties;

import org.junit.After;
import org.junit.Test;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;



public class Browser_run {
	 static WebDriver driver;
	
	
	public static WebDriver run_browser() throws Throwable {
		
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\Alain Mickey\\Desktop\\ChromeDriver\\Chrome driver\\chromedriver.exe" );
		
		driver = new ChromeDriver();
		driver.manage().deleteAllCookies();
		driver.manage().window().maximize();
		
		Properties pro = new Properties();
		InputStream read_pro= new FileInputStream("C:\\Users\\Alain Mickey\\Desktop\\All Java project____eclipse\\maven projects\\DATA_DRIVEN (for submission)\\BDD_review\\src\\main\\java\\browser\\url.properies");
		 pro.load(read_pro);
		 String link = pro.getProperty("url");
		 driver.get(link);
		return driver;
	}
	
	@After
	public static WebDriver close_browser() throws Throwable {
	
		Thread.sleep(3000);
		driver.close();
		driver.quit();
		return driver;
}
}
