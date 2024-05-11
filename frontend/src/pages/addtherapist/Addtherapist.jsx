import "./addtherapist.scss";
import configuredUrl from "../../utils/request/request";
import { toast } from "react-toastify";
import { useRef, useState } from "react";

const Addtherapist = () => {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [number, setNumber] = useState("");
  const [experience, setExperience] = useState("");
  const [description, setDescription] = useState("");
  const [languages, setLanguages] = useState([]);
  const [image, setImage] = useState("");
  const [uploadImage, setUploadImage] = useState("");
  const formRef = useRef();

  //submit function
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("location", location);
    formData.append("price", price);
    formData.append("number", number);
    formData.append("experience", experience);
    formData.append("description", description);
    formData.append("languages", JSON.stringify(languages));
    formData.append("image", uploadImage);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await configuredUrl.post(
        "/therapist/add-therapist",
        formData,
        config
      );
      if (data.success) {
        toast.success("data added successfully");
        setDescription("");
        setLocation("");
        setName("");
        setImage("");
        setPrice("");
        setUploadImage("");
        setNumber("");
        setLanguages([]);
        setImage("");
        setExperience("");
      } else {
        toast.error("Something went wrong");
      }
    } catch (e) {
      toast.error("Something went wrong");
    }
  };

  const checkedFun = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setLanguages([...languages, value]);
    } else {
      let filtered = languages.filter((it) => it !== value);
      setLanguages(filtered);
    }
  };
  return (
    <section className="add-therapist-container">
      <form ref={formRef} onSubmit={handleSubmit}>
        <input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          type="text"
          name="name"
          placeholder="Enter name"
        />

        <input
          required
          onChange={(e) => {
            setLocation(e.target.value);
          }}
          value={location}
          type="text"
          name="location"
          placeholder="Enter the location"
        />
        <input
          required
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          value={number}
          type="number"
          name="number"
          placeholder="Enter the number"
        />
        <input
          required
          onChange={(e) => {
            setExperience(e.target.value);
          }}
          value={experience}
          type="text"
          name="experience"
          placeholder="Enter the experience"
        />
        <input
          required
          onChange={(e) => {
            setPrice(e.target.value);
          }}
          value={price}
          type="number"
          name="price"
          placeholder="Enter the price"
        />

        <textarea
          rows={5}
          required
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          type="text"
          name="description"
          placeholder="Enter the description"
        />
        <input
          required
          type="file"
          onChange={(e) => {
            if (e.target.files.length !== 0) {
              let imgsrc = URL.createObjectURL(e.target.files[0]);
              console.log(imgsrc);
              setImage(imgsrc);
              setUploadImage(e.target.files[0]);
            }
          }}
          name="image"
          placeholder="upload image"
        />
        {image && <img src={image} alt="PreviewImage" />}
        <section className="language_section">
          <h4>language:</h4>
          <section>
            <label>
              Kannada:
              <input
                name="language"
                onChange={checkedFun}
                value="kannada"
                type="checkbox"
                checked={languages.includes("kannada")}
              />
            </label>
            <label>
              Telugu:
              <input
                name="language"
                onChange={checkedFun}
                value="telugu"
                type="checkbox"
                checked={languages.includes("telugu")}
              />
            </label>

            <label>
              Tamil:
              <input
                name="language"
                onChange={checkedFun}
                value="tamil"
                type="checkbox"
                checked={languages.includes("tamil")}
              />
            </label>
            <label>
              Hindi:
              <input
                name="language"
                onChange={checkedFun}
                value="hindi"
                type="checkbox"
                checked={languages.includes("hindi")}
              />
            </label>

            <label>
              English:
              <input
                name="language"
                onChange={checkedFun}
                value="english"
                type="checkbox"
                checked={languages.includes("english")}
              />
            </label>
            <label>
              Gujarati
              <input
                name="language"
                onChange={checkedFun}
                value="gujarati"
                type="checkbox"
                checked={languages.includes("gujarati")}
              />
            </label>
          </section>
        </section>
        <button>submit</button>
      </form>
    </section>
  );
};

export default Addtherapist;
