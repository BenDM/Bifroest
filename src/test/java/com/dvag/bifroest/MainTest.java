//package com.dvag.bifroest;
//
//import com.intuit.karate.Results;
//import com.intuit.karate.Runner;
//import cucumber.api.junit.Cucumber;
//import net.masterthought.cucumber.ReportBuilder;
//import net.masterthought.cucumber.Configuration;
//import net.masterthought.cucumber.Reportable;
//import net.masterthought.cucumber.json.support.Status;
//import net.masterthought.cucumber.sorting.SortingMethod;
//import org.apache.commons.io.FileUtils;
//import org.junit.jupiter.api.Test;
//import org.junit.runner.RunWith;
//
//import java.io.File;
//import java.util.ArrayList;
//import java.util.Collection;
//import java.util.Collections;
//import java.util.List;
//
//public class MainTest {
//    @Test
//    void testParallel() {
//        Results results = Runner.path("classpath:com/dvag/bifroest").tags("~@ignore").parallel(1);
//       // generateReport(results.getReportDir());
//
//        // assertEquals( 0, results.getFailCount(), results.getErrorMessages());
//    }
//
//    public static void generateReport(String karateOutputPath) {
//        Collection<File> jsonFiles =
//                FileUtils.listFiles(new File(karateOutputPath),
//                        new String[] {"json"}, true);
//        List<String> jsonPaths = new ArrayList<>(jsonFiles.size());
//        jsonFiles.forEach(file -> jsonPaths.add(file.getAbsolutePath()));
//        Configuration config = new Configuration(new File("target"),
//                "KarateTest_");
//        ReportBuilder reportBuilder = new ReportBuilder(jsonPaths, config);
//        reportBuilder.generateReports();
//
////        File reportOutputDirectory = new File("target/demo");
////        List<String> jsonFiles = new ArrayList<>();
////        jsonFiles.add("src/test/resources/sample.json");
////
////        String buildNumber = "101";
////        String projectName = "Live Demo Project";
////        Configuration configuration = new Configuration(reportOutputDirectory, projectName);
////        configuration.setBuildNumber(buildNumber);
////
////        configuration.addClassifications("Browser", "Firefox");
////        configuration.addClassifications("Branch", "release/1.0");
////        configuration.setSortingMethod(SortingMethod.NATURAL);
////
////        // points to the demo trends which is not used for other tests
////        configuration.setTrendsStatsFile(new File("target/test-classes/demo-trends.json"));
////
////        ReportBuilder reportBuilder = new ReportBuilder(jsonFiles, configuration);
////        reportBuilder.generateReports();
//    }
//}
