import React from "react";

export default function Search() {
  return (
    <div className="Search">
      <form class="mb-3">
        <div class="row">
          <span class="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              class="form-control"
              id="type-city"
              autocomplete="off"
            />
          </span>
          <span class="col-3">
            <input type="submit" value="Search" class="btn btn-primary w-100" />
          </span>
        </div>
      </form>
    </div>
  );
}
