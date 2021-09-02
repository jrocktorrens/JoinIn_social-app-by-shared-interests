CREATE TABLE `hosts` (
  `host_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_id` int,
  `host_rating` int,
  `host_note` varchar(255),
  `host_date_created` date
);

CREATE TABLE `users` (
  `user_id` int PRIMARY KEY AUTO_INCREMENT,
  `user_favorite_game` int,
  `user_age` int,
  `user_sex` varchar(255),
  `user_diet` varchar(255),
  `user_smokes` varchar(255),
  `user_pets` varchar(255),
  `user_speaks` varchar(255),
  `user_first_name` varchar(255),
  `user_last_name` varchar(255),
  `user_city` varchar(255),
  `user_note` varchar(255),
  `user_rating` int,
  `user_phone_number` int,
  `user_date_created` date
);

CREATE TABLE `events` (
  `event_id` int PRIMARY KEY AUTO_INCREMENT,
  `event_address` varchar(255),
  `event_name` varchar(255),
  `event_note` varchar(255),
  `event_date_created` date,
  `event_date` date,
  `even_num_attendances` int,
  `event_rank` int,
  `event_phone_number` int,
  `host_id` int,
  `event_map_cor_lon` float,
  `event_map_cor_lat` float,
  `even_game_id` int
);

CREATE TABLE `games` (
  `game_id` int PRIMARY KEY AUTO_INCREMENT,
  `game_current_champion` int,
  `game_name` varchar(255),
  `game_info` varchar(255)
);

ALTER TABLE `hosts` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);

ALTER TABLE `users` ADD FOREIGN KEY (`user_favorite_game`) REFERENCES `games` (`game_id`);

ALTER TABLE `events` ADD FOREIGN KEY (`host_id`) REFERENCES `hosts` (`host_id`);

ALTER TABLE `events` ADD FOREIGN KEY (`even_game_id`) REFERENCES `games` (`game_id`);

ALTER TABLE `games` ADD FOREIGN KEY (`game_current_champion`) REFERENCES `users` (`user_id`);
