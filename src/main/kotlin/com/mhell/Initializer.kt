package com.mhell

import org.springframework.beans.factory.annotation.Autowired
import org.springframework.stereotype.Component
import javax.annotation.PostConstruct

@Component
class Initializer {

    @Autowired
    private lateinit var db: MhellDatabase

    @PostConstruct
    fun initialize() {
        db.connect
    }
}