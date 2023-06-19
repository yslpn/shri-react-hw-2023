export default function Home() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col w-96 p-6 bg-white rounded-lg">
        <h1>Фильтр поиска</h1>
        <div className="flex flex-col mt-5">
          <label className="flex flex-col">
            Название
            <input className="mt-1" type="text" placeholder="Введите название" />
          </label>

          <label className="flex flex-col">
            Жанр
            <select>
              <option value="">Выберите жанр</option>
              <option value="horror">Ужасы</option>
              <option value="comedy">Комедия</option>
            </select>
          </label>

          <label className="flex flex-col">
            Кинотеатр
            <select>
              <option value="">Выберите кинотеатр</option>
              <option value="cinemax">Cinemax</option>
              <option value="mayakovski">Маяковский</option>
            </select>
          </label>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <article className="flex w-100 w-full bg-white rounded-lg p-6">
          <img src="" alt="постер" />
          <div className="flex flex-col flex-1">
            <h2>Властелин колец: Братство кольца</h2>
            <p>Фэнтези</p>
          </div>
          <div className="ml-auto flex items-start">
            <button>-</button>
            <p> 0 </p>
            <button>+</button>
          </div>
        </article>
        <article className="flex w-100 w-full bg-white rounded-lg p-6">
          <img src="" alt="постер" />
          <div className="flex flex-col flex-1">
            <h2>Властелин колец: Братство кольца</h2>
            <p>Фэнтези</p>
          </div>
          <div className="ml-auto flex items-start">
            <button>-</button>
            <p> 0 </p>
            <button>+</button>
          </div>
        </article>
      </div>
    </div>
  );
}
