package com.example.student_activity_points;

import com.example.student_activity_points.controller.AdminDashboardController;
import com.example.student_activity_points.repository.ActivityRepository;
import com.example.student_activity_points.repository.FARepository;
import com.example.student_activity_points.repository.StudentRepository;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@SpringBootTest
class AdminDashboardControllerTest {

    @MockBean
    private StudentRepository studentRepository;

    @MockBean
    private FARepository faRepository;

    @MockBean
    private ActivityRepository activityRepository;

    @Test
    void testGetDashboardStats() {
        // Arrange
        long mockStudents = 10L;
        long mockFAs = 5L;
        long mockActivities = 20L;

        when(studentRepository.count()).thenReturn(mockStudents);
        when(faRepository.count()).thenReturn(mockFAs);
        when(activityRepository.count()).thenReturn(mockActivities);

        AdminDashboardController controller = new AdminDashboardController();
        controller.getClass(); // just to satisfy the context if needed

        // Use Reflection to set autowired fields (if no constructor)
        inject(controller);

        // Act
        Map<String, Long> stats = controller.getDashboardStats();

        // Assert
        assertThat(stats).isNotNull();
        assertThat(stats.get("students_count")).isEqualTo(mockStudents);
        assertThat(stats.get("fa_count")).isEqualTo(mockFAs);
        assertThat(stats.get("activities_count")).isEqualTo(mockActivities);
        System.out.println("✅ All tests in AdminDashboardControllerTest passed successfully!");
    }

    // Helper method to inject mock beans
    private void inject(AdminDashboardController controller) {
        try {
            var studentField = AdminDashboardController.class.getDeclaredField("studentRepository");
            var faField = AdminDashboardController.class.getDeclaredField("faRepository");
            var activityField = AdminDashboardController.class.getDeclaredField("activityRepository");

            studentField.setAccessible(true);
            faField.setAccessible(true);
            activityField.setAccessible(true);

            studentField.set(controller, studentRepository);
            faField.set(controller, faRepository);
            activityField.set(controller, activityRepository);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }
}
