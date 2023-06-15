package com.example.instrumentosback.entities;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "personas")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class Persona extends Base {

    @Column(name="email")
    private String email;

    @Column(name="firstName")
    private String firstName;

    @Column(name="lastName")
    private String lastName;

}
