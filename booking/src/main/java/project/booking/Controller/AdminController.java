package project.booking.Controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import project.booking.Model.Admin;
import project.booking.Service.AdminService;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("api/v1/admin")
public class AdminController {

     public AdminService adminService;

    @PostMapping
    public Admin post(@RequestBody Admin admin){
        return adminService.post(admin);
    }

    @PutMapping("/admins/{id}")
    public Admin updateStudent(@PathVariable int id, @RequestBody Admin admin) {
        return adminService.updateAdmin(id, admin);
    }

    @GetMapping("/get-admin")
    public List<Admin> listAdmin() {
        return  adminService.listAdmin();
    }
    @GetMapping("/{id}")
    public Optional<Admin> getById(@PathVariable Integer id){
        return adminService.getById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        adminService.deleteById(id);
    }

    public List<Admin> getAdmin(){
        return adminService.listAdmin();
    }
}
