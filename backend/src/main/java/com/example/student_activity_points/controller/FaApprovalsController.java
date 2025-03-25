package com.example.student_activity_points.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.student_activity_points.repository.*;

import java.util.*;
import java.util.stream.Collectors;

import com.example.student_activity_points.domain.Activity;
import com.example.student_activity_points.domain.Fa;
import com.example.student_activity_points.domain.Requested;
import com.example.student_activity_points.domain.Student;
import com.example.student_activity_points.domain.StudentActivity;
import com.example.student_activity_points.domain.Validation;
import com.example.student_activity_points.domain.Requests.Status;
import com.example.student_activity_points.domain.Validation.Validated;
import com.example.student_activity_points.domain.Requests;


// @RestController
// @RequestMapping("/api/fa")
// public class FaApprovalsController {

//     private final StudentActivityRepository studentActivityRepository;

//     @Autowired
//     private FARepository faRepository;

//     @Autowired
//     private StudentRepository studentRepository;

//     @Autowired
//     private RequestsRepository requestRepository;

//     @Autowired
//     private RequestedRepository requestedRepository;

//     @Autowired
//     private ValidationRepository validationRepository;

//     @Autowired
//     private ActivityRepository activityRepository;


//     FaApprovalsController(StudentActivityRepository studentActivityRepository) {
//         this.studentActivityRepository = studentActivityRepository;
//     }


//     @GetMapping("/details")
// public ResponseEntity<?> getFaDetails(@RequestParam String email) {
//     Optional<Fa> faOptional = faRepository.findByEmailID(email);
//     if (!faOptional.isPresent()) {
//         return ResponseEntity.status(404).body("FA not found");
//     }

//     Fa fa = faOptional.get();
//     Long faId = fa.getFAID();

//     // Get all "Pending" requests assigned to this FA
//     List<Requested> assignedRequests = requestedRepository.findByFAID(faId.intValue())
//             .stream()
//             .filter(req -> req.getApproved().equalsIgnoreCase("Pending"))
//             .collect(Collectors.toList());

//     // Extract request IDs
//     List<Long> requestIds = assignedRequests.stream()
//             .map(Requested::getRid)
//             .collect(Collectors.toList());

//     // Fetch actual request details from "Request" table
//     List<Requests> pendingRequests = requestRepository.findAllById(requestIds)
//             .stream()
//             .filter(request -> {
//                 List<Requested> faApprovals = requestedRepository.findByRID(request.getRid());
//                 boolean allOtherFAsApproved = faApprovals.stream()
//                         .filter(req -> !req.getFAID().equals(faId)) // Check other FAs
//                         .allMatch(req -> req.getApproved().equalsIgnoreCase("Approved"));

//                 return allOtherFAsApproved; // Include request only if all other FAs have approved
//             })
//             .collect(Collectors.toList());

//     // Structure response
//     List<Map<String, Object>> responseList = new ArrayList<>();
//     for (Requests request : pendingRequests) {
//         Map<String, Object> response = new HashMap<>();
//         response.put("rid", request.getRid());
//         response.put("sid", request.getSid());
//         response.put("status", request.getStatus());
//         response.put("activity_name", request.getActivityName());
//         response.put("activity_date", request.getActivityDate());
//         response.put("type", request.getType());

//         responseList.add(response);
//     }

//     return ResponseEntity.ok(responseList);
// }

//     @PostMapping("/approve-request/{rid}")
//     public ResponseEntity<?> approveRequest(@PathVariable Long rid, @RequestParam String email,@RequestParam Integer points) {
//         Optional<Fa> faOptional = faRepository.findByEmailID(email);
//         if (!faOptional.isPresent()) {
//             return ResponseEntity.status(404).body("FA not found");
//         }
//         Fa fa = faOptional.get();
//         Optional<Requests> requestOpt = requestRepository.findById(rid);
//         if (requestOpt.isEmpty()) {
//             return ResponseEntity.status(404).body("Request not found");
//         }
//         Requests req = requestOpt.get();
//         Student student = studentRepository.findById(req.getSid()).get();
//         if(student.getFaid()!=fa.getFAID()){
//             Optional<Requested> requestedOpt = requestedRepository.findByRidAndFAID(rid,fa.getFAID().intValue());
//             Requested requested=requestedOpt.get();
//             requested.setApproved(true);
//             requestedRepository.save(requested);
//             return ResponseEntity.status(200).body("Successfully approved!");
//         }

//         Optional<Activity> activityOpt = activityRepository.findByName(req.getActivityName());

//     if (activityOpt.isEmpty()) {
//         Activity new_activity=new Activity();
//         new_activity.setName(req.getActivityName());
//         new_activity.setDescription(req.getDescription());
//         new_activity.setDate(req.getActivityDate());
//         new_activity.setOutside_inside("Outside");
//         new_activity.setMandatory(0);
//         new_activity.setPoints(points);
//         new_activity.setType("Institute");
//         activityRepository.save(new_activity);
//     }
//     StudentActivity studentActivity=new StudentActivity();
//     studentActivity.setActID(activityRepository.findByName(req.getActivityName()).get().getActID().intValue());
//     studentActivity.setSid(req.getSid());
//     studentActivity.setDate(new Date());
//     studentActivity.setLink(req.getLink());
    
//     studentActivity.setTitle(req.getActivityName());
    
    
//     if(activityOpt.isEmpty()){
//         studentActivity.setPoints(points);
//         studentActivity.setActivityType("Institute");
//         student.setInstitutePoints(points+student.getInstitutePoints());
//     }
//     else if(activityOpt.get().getType().equals("Institute")){
//         studentActivity.setPoints(activityOpt.get().getPoints());
//         studentActivity.setActivityType("Institute");
//         student.setInstitutePoints(activityOpt.get().getPoints()+student.getInstitutePoints());
//     }
//     else{
//         studentActivity.setPoints(activityOpt.get().getPoints());
//         studentActivity.setActivityType("Department");
//         student.setDeptPoints(activityOpt.get().getPoints()+student.getDeptPoints());
//     }
//     studentActivityRepository.save(studentActivity);
//     studentRepository.save(student);
//     req.setStatus(Status.Approved);
//     requestRepository.save(req);
        
//     return ResponseEntity.ok("Successfully approved");
    

//     }


//     @PostMapping("/validate-request/{rid}")
// public ResponseEntity<?> validateRequest(@PathVariable Long rid) {
//     // Find the request by ID
//     Optional<Requests> requestOpt = requestRepository.findById(rid);
    
//     if (requestOpt.isEmpty()) {
//         return ResponseEntity.status(404).body("Request not found");
//     }

//     Requests req = requestOpt.get();

//     // Find activity by name
//     Optional<Activity> activityOpt = activityRepository.findByName(req.getActivityName());

//     if (activityOpt.isEmpty()) {
//         return ResponseEntity.status(404).body("Activity not found");
//     }

//     Activity activity = activityOpt.get();

//     // Check if validation already exists
//     Validation validation = validationRepository.findByActIDAndSID(activity.getActID(), req.getSid());
//     System.out.println("ActID: " + activity.getActID() + ", SID: " + req.getSid());
//     if (validation == null) {
//         return ResponseEntity.status(400).body("Cannot validate: Already validated");
//     }
//     validation.setValidated(Validated.Yes);
//     validationRepository.save(validation);
//     return ResponseEntity.ok("Successfully validated");
// }

//     @PostMapping("/reject-request/{rid}")
//     public ResponseEntity<?>  RejectRequest(@PathVariable Long rid) {
//         Optional<Requests> request=requestRepository.findById(rid);
//         Requests req=request.get();
//         req.setStatus(Status.Rejected);
//         requestRepository.save(req);
        
//         return ResponseEntity.ok("Successfully rejected");
//     }
    
    
// }
