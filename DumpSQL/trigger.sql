
DELIMITER //
CREATE TRIGGER update_average_score
AFTER INSERT ON anime_list
FOR EACH ROW
BEGIN
    -- Declare variables to store total score and total users
    DECLARE total_score DECIMAL(4, 2);
    DECLARE total_users INT;

    -- Calculate total score and total users for the specific anime
    SELECT SUM(score), COUNT(*) INTO total_score, total_users
    FROM anime_list
    WHERE anime_id = NEW.anime_id;

    -- Update the anime score
    UPDATE anime
    SET score = total_score / total_users
    WHERE anime_id = NEW.anime_id;
END;
//
DELIMITER ;