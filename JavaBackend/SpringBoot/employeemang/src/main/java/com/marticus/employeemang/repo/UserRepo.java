package com.marticus.employeemang.repo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marticus.employeemang.entity.UserEntity;

@Repository
public interface UserRepo extends JpaRepository<UserEntity, Integer> {

	UserEntity findUsersById(int id);

	UserEntity findUsersByUserName(String userName);

	UserEntity findUsersByUserNameAndPassword(String userName, String password);

}
