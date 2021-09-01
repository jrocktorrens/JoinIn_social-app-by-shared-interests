
CREATE TABLE IF NOT EXISTS userS (
    id            INT  AUTO_INCREMENT,
    first_name          VARCHAR(200) NOT NULL,
    last_name          VARCHAR(200) NOT NULL,
    email          VARCHAR(200) NOT NULL,
    is_admin          TINYINT(1),
    password          VARCHAR(500),
    phone             INT NOT NULL,
    PRIMARY KEY (id)
);