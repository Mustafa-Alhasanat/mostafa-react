import React, { useState, useEffect } from "react";
import { HiDotsCircleHorizontal } from "react-icons/hi";
import DateFormater from "utils/date-formater";
import DrawArc from "utils/draw-arc";
import PropTypes from "prop-types";
import { FaList } from "react-icons/fa";
import { BsSuitHeartFill, BsBookmarkFill } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import colors from "styles/colors";
import constants from "utils/constants";
import {
  StyledRatingImg,
  StyledSuperscripted,
  StyledVoteBar,
  StyledArc,
  StyledArcPath,
  StyledNumericRatio,
  StyledCard,
  StyledPoster,
  StyledLowerSection,
  StyledName,
  StyledDate,
  StyledOverview,
  StyledCornerDots,
  StyledSubWindow,
  StyledSubWindowItem,
  StyledSubWindowTitle,
  StyledBlurred,
  StyledListModal,
} from "components/movieCard/movie-card.styles";

/**
 * A component that creates the movie card.
 *
 * @param {string} name The name of the movie.
 * @param {number} vote The vote of the movie (out of 10).
 * @param {string} date The release date of the movie.
 * @param {string} overview An overview for the movie.
 * @param {string} imageURL The full name of the poster image stored in the TMDB server.
 * @param {string} movieKey A unique string to be added for each movie as a unique key value.
 * @param {bool} isListOpened boolean value indicates if one of the movies' list is opened.
 * @param {func} toggleIsOpened A function that changes the state of (isListOpened).
 *
 * @return {Element} A styled component (div).
 */
function MovieCard({
  name,
  vote,
  date,
  overview,
  imageURL,
  movieKey,
  isListOpened,
  toggleIsOpened,
}) {
  const releaseDate = DateFormater(date);
  const [imgURL, setImgURL] = useState(constants.tmdb.baseImageURL + imageURL);
  const [clicked, setIsClicked] = useState(false);

  useEffect(() => {
    const movieRate = (vote * 10 * 360) / 100;
    var arc1 = DrawArc(19, 19, 17, 0, movieRate);
    var arc2 = DrawArc(19, 19, 15, 0, movieRate);

    document.getElementById(`${movieKey}1`).setAttribute("d", arc1);
    document.getElementById(`${movieKey}2`).setAttribute("d", arc2);
  });

  useEffect(() => {
    if (!isListOpened) {
      setIsClicked(false);
    }
  }, [isListOpened]);

  const clickSubListHandler = () => {
    setIsClicked((prev) => !prev);
    toggleIsOpened();
  };

  return (
    <StyledCard key={movieKey}>
      {clicked && isListOpened && (
        <StyledListModal onClick={clickSubListHandler}></StyledListModal>
      )}

      <StyledBlurred state={clicked && isListOpened} />

      <StyledCornerDots
        data-testid="horizontal three dots"
        onClick={clickSubListHandler}
      >
        <HiDotsCircleHorizontal size={30} />
      </StyledCornerDots>

      {clicked && isListOpened && (
        <StyledSubWindow data-testid="hidden items list">
          {[
            {
              icon: <FaList size={13} />,
              text: "Add to list",
            },
            {
              icon: <BsSuitHeartFill size={13} />,
              text: "Favorite",
            },
            {
              icon: <BsBookmarkFill size={13} />,
              text: "Whatchlist",
            },
            {
              icon: <AiFillStar size={13} />,
              text: "Your rating",
            },
          ].map((item, index) => {
            return (
              <StyledSubWindowItem key={`number: ${index}`}>
                {item.icon}
                <StyledSubWindowTitle key={`number: ${index}`}>
                  {item.text}
                </StyledSubWindowTitle>
              </StyledSubWindowItem>
            );
          })}
        </StyledSubWindow>
      )}

      <StyledPoster
        onError={() => {
          setImgURL(constants.images.blankImage);
        }}
        alt={name}
        src={imgURL}
      />

      <StyledLowerSection>
        <StyledRatingImg>
          <StyledNumericRatio>
            {Number(vote * 10)}
            <StyledSuperscripted>%</StyledSuperscripted>
          </StyledNumericRatio>

          <StyledVoteBar>
            <StyledArc>
              <StyledArcPath
                id={`${movieKey}1`}
                color={vote < 7 ? "goldenrod" : "chartreuse"}
              />
            </StyledArc>

            <StyledArc>
              <StyledArcPath id={`${movieKey}2`} color={colors.black} />
            </StyledArc>
          </StyledVoteBar>
        </StyledRatingImg>

        <StyledName>{name}</StyledName>
        <StyledDate>{releaseDate}</StyledDate>
        <StyledOverview>{overview}</StyledOverview>
      </StyledLowerSection>
    </StyledCard>
  );
}

MovieCard.propTypes = {
  name: PropTypes.string.isRequired,
  vote: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  movieKey: PropTypes.string.isRequired,
  isListOpened: PropTypes.bool.isRequired,
  toggleIsOpened: PropTypes.func.isRequired,
};

export default MovieCard;
