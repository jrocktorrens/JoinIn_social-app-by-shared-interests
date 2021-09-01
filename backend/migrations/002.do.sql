
 CREATE TABLE IF NOT EXISTS pets (
    pet_id            int  AUTO_INCREMENT,
    type          VARCHAR(200) NOT NULL,
    name          VARCHAR(200) NOT NULL,
    adoptionStatus          VARCHAR(200) NOT NULL,
    breed          VARCHAR(200) NOT NULL,
    color          VARCHAR(200) NOT NULL,
    allergies          VARCHAR(200) NOT NULL,
    weight          VARCHAR(200) NOT NULL,
    height         VARCHAR(200) NOT NULL,
    diet           VARCHAR(200) NOT NULL,
    img            VARCHAR(10000) NOT NULL,
    bio            VARCHAR(1000) NOT NULL,
    -- user_id         VARCHAR(1000) NOT NULL,
    PRIMARY KEY (pet_id)
 );