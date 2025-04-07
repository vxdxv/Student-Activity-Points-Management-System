package com.example.student_activity_points;

import com.example.student_activity_points.controller.TestController;
import org.junit.jupiter.api.Test;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
class TestControllerTest {

    @Autowired
    private TestRestTemplate restTemplate;

    @Test
    void testCorsEndpoint() {
        String response = this.restTemplate.getForObject("/api/test", String.class);
        assertThat(response).isEqualTo("CORS is working!");
    }
}
