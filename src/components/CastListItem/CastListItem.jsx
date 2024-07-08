import PropTypes from 'prop-types';

export const CastListItem = ({ profilePath, originalName, name }) => {
    return (
        <li>
            <img
                width="250"
                height="250"
                src={
                    profilePath
                        ? `https://image.tmdb.org/t/p/w300${profilePath}`
                        : `https://fakeimg.pl/600x400?text=No+image+Available`
                }
                alt={originalName}
            />
            <p>{name}</p>
        </li>
    );
};

CastListItem.propTypes = {
    profilePath: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    originalName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};