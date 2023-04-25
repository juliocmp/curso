package com.cursojava.curso.models;

import javax.persistence.*;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
//

///
@Entity
@Table(name = "usuarios")
@ToString @EqualsAndHashCode
public class Usuario {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter @Setter @Column(name ="id")
    private Long Id;
    @Getter @Setter @Column(name ="nombre")
    private String nombre;
    @Getter @Setter @Column(name ="apellido")
    private String apellido;
    @Getter @Setter @Column(name ="email")
    private String email;
    @Getter @Setter @Column(name ="telefono")
    private String telefono;
    @Getter @Setter @Column(name ="password")
    private String password;


}