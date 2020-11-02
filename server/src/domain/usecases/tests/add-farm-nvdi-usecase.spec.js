const AddFarmNDVICase = require("../add-farm-ndvi-usecase");

const makeFakeFarmNDVIData = () => ({
	value: 1,
	farmId: "valid_farm_id",
	__v: 0.0
});

const makeFakeFarmNDVI = () => ({
	_id: "valid_id",
	...makeFakeFarmNDVIData()
});

const makeFarmRepositoryNDVI = () => {
	class FarmRepositoryPrecipitationStub {
		async add(data) {
			this.data = data;
			return new Promise(resolve => resolve(makeFakeFarmNDVI()));
		}
	}

	return new FarmRepositoryPrecipitationStub();
};

const makeSut = () => {
	const farmRepositoryStub = makeFarmRepositoryNDVI();
	const sut = new AddFarmNDVICase({ farmNDVIRepository: farmRepositoryStub });

	return {
		sut,
		farmRepositoryStub
	};
};

describe("Add Farm UseCase", () => {
	test("should call FarmRepositoryPrecipitation with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		const addSpy = jest.spyOn(farmRepositoryStub, "add");
		await sut.add(makeFakeFarmNDVI());
		expect(addSpy).toHaveBeenCalledWith(makeFakeFarmNDVI());
	});

	test("should throw if FarmRepositoryPrecipitation throws", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		jest.spyOn(farmRepositoryStub, "add")
			.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.add(makeFakeFarmNDVI());
		await expect(promise).rejects.toThrow();
	});

	test("should call FarmRepositoryPrecipitation with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();
		const getSpy = jest.spyOn(farmRepositoryStub, "add");

		await sut.add(makeFakeFarmNDVI());
		expect(getSpy).toHaveBeenCalledWith(makeFakeFarmNDVI());
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const farm = await sut.add("valid_id");
		expect(farm).toEqual(makeFakeFarmNDVI());
	});
});
