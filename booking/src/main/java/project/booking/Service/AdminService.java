package project.booking.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import project.booking.Model.Admin;
import project.booking.Repository.AdminRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired
    public AdminRepository adminRepository;


    public Admin post(Admin admin){
        return adminRepository.save(admin);
    }

    public Admin updateAdmin(int id, Admin admin) {
        Optional<Admin> existingAdmin = adminRepository.findById((id));
        if (existingAdmin.isPresent()) {
            Admin updatedAdmin = existingAdmin.get();
            updatedAdmin.setAdminName(admin.getAdminName());
            updatedAdmin.setEmail(admin.getEmail());
            updatedAdmin.setRegistrationNumber(admin.getRegistrationNumber());
            // Update other fields as necessary
            return adminRepository.save(updatedAdmin);
        } else {
            throw new RuntimeException("Admin not found with id " + id);
        }
    }

    public Optional<Admin> getById(Integer id) {

        return adminRepository.findById(id);
    }

    public List<Admin> listAdmin() {
        return adminRepository.findAll();
    }

    public void deleteById(Integer id){
        adminRepository.deleteById(id);
    }
//    public List<Admin> getAdmin(){
//        return adminRepository.findAll();
//    }
}
