package project.booking.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import project.booking.Model.Admin;

@Repository
public interface AdminRepository extends JpaRepository<Admin, Integer> {
}
