import "./category.scss";

const Category = () => {
  return (
    <>
      {/* options section */}
      <section className="category_maincontainer">
        <section className="booking-container">
          <label htmlFor="language" className="option">
            <select id="language">
              <option value="lang" class="bold-option">
                Language
              </option>
              <option value="hindi">Hindi</option>
              <option value="kannada">Kannada</option>
              <option value="tamil">Tamil</option>
              <option value="telugu">Telugu</option>
            </select>
          </label>

          <label htmlFor="category" className="option">
            <select id="category">
              <option value="category" class="bold-option">
                Category
              </option>
              <option value="couple">Couple and Marriage Counseling</option>
              <option value="stress">Stress and Anxiety</option>
              <option value="depression">Depression</option>
              <option value="breakup">Breakup Counseling</option>
              <option value="sex">Sex and Intimacy Coaching</option>
              <option value="premarital">Premarital Counseling</option>
              <option value="work">Work Stress</option>
              <option value="lgbt">LGBTQIA+</option>
              <option value="loneliness">Loneliness</option>
            </select>
          </label>

          <label htmlFor="rating" className="option">
            <select id="rating">
              <option value="rate" className="bold-option">
                Rating
              </option>
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
            </select>
          </label>

          <label htmlFor="experience" className="option">
            <select id="experience">
              <option value="expe" class="bold-option">
                Years of Experience
              </option>
              <option value="one">1 year</option>
              <option value="two">2 years</option>
              <option value="three">3 years</option>
            </select>
          </label>
          <button type="submit">Search</button>
        </section>
        {/* booking button section */}
      </section>
    </>
  );
};
export default Category;
