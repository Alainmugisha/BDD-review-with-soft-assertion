package runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(

features="C:\\Users\\Alain Mickey\\Desktop\\All Java project____eclipse\\maven projects\\DATA_DRIVEN (for submission)\\BDD_review\\src\\test\\java\\login.Feature",
glue="",
//tags =" @login_with_Wrong_username",
monochrome=true,
dryRun=false,
plugin= {
"pretty",
"html:target/cucumber",
"json:target/cucumber.json"
}
)



public class Features_runner {

}
