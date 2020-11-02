const AddFarmPrecipitationUseCase = require("../add-farm-precipitation-usecase");

const makeFakeFarmPrecipitationData = () => ({
	value: 1,
	farmId: "valid_farm_id",
	__v: 0.0
});

const makeFakeFarmPrecipitation = () => ({
	_id: "valid_id",
	...makeFakeFarmPrecipitationData()
});

const makeFarmRepositoryPrecipitation = () => {
	class FarmRepositoryPrecipitationStub {
		async add(data) {
			this.data = data;
			return new Promise(resolve => resolve(makeFakeFarmPrecipitation()));
		}
	}

	return new FarmRepositoryPrecipitationStub();
};

const makeSut = () => {
	const farmRepositoryStub = makeFarmRepositoryPrecipitation();
	const sut = new AddFarmPrecipitationUseCase({ farmPrecipitationRepository: farmRepositoryStub });

	return {
		sut,
		farmRepositoryStub
	};
};

describe("Add Farm UseCase", () => {
	test("should call FarmRepositoryPrecipitation with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		const addSpy = jest.spyOn(farmRepositoryStub, "add");
		await sut.add(makeFakeFarmPrecipitation());
		expect(addSpy).toHaveBeenCalledWith(makeFakeFarmPrecipitation());
	});

	test("should throw if FarmRepositoryPrecipitation throws", async () => {
		const { sut, farmRepositoryStub } = makeSut();

		jest.spyOn(farmRepositoryStub, "add")
			.mockReturnValueOnce(new Promise((resolve, reject) => reject(new Error())));
		const promise = sut.add(makeFakeFarmPrecipitation());
		await expect(promise).rejects.toThrow();
	});

	test("should call FarmRepositoryPrecipitation with correct values", async () => {
		const { sut, farmRepositoryStub } = makeSut();
		const getSpy = jest.spyOn(farmRepositoryStub, "add");

		await sut.add(makeFakeFarmPrecipitation());
		expect(getSpy).toHaveBeenCalledWith(makeFakeFarmPrecipitation());
	});

	test("should return a farm on success", async () => {
		const { sut } = makeSut();
		const farm = await sut.add("valid_id");
		expect(farm).toEqual(makeFakeFarmPrecipitation());
	});
});
