function shopObj () {
	//Attributes declaration
	this.id;
	this.name;
	this.shopAdmin;
	this.bannerImage;
	this.shopDescription;

	//Methods declaration
	this.construct = function (id,name,shopAdmin,bannerImage,shopDescription) {
		this.setId(id);
		this.setName(name);
		this.setShopAdmin(shopAdmin);
		this.setBannerImage(bannerImage);
		this.setShopDescription(shopDescription);
	}

	this.setId = function (id){this.id=id;}
	this.setName = function (name){this.name=name;}
	this.setShopAdmin = function (shopAdmin){this.shopAdmin=shopAdmin;}
	this.setBannerImage = function (bannerImage){this.bannerImage=bannerImage};
	this.setShopDescription = function (shopDescription){this.shopDescription=shopDescription};

	this.getId = function () {return this.id;}
	this.getName = function () {return this.name;}
	this.getShopAdmin = function () {return this.shopAdmin;}
	this.getBannerImage = function () {return this.bannerImage;}
	this.getShopDescription = function () {return this.shopDescription;}


	this.validate = function ()	{
		var errors = new Array();

		try	{
			if(this.getName().length == 0 || this.getName().match(/^[a-zA-Z]+$/)==null)	{
				errors.push("Name must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Name must be informed and contain only letters");
		}

		try	{
			if(this.setShopAdmin().length == 0 || this.setShopAdmin().match(/^[a-zA-Z]+$/)==null)	{
				errors.push("Shop Admin must be informed and contain only letters");
			}
		}
		catch(e) {
			errors.push("Shop Admin be informed and contain only letters");
		}

		return errors;
	}

	this.toString = function (){
		var shopString = "SHOP - ID="+this.getId()+" SHOP NAME="+this.getName()+" SHOP ADMIN="+this.getShopAdmin();
		shopString += "BANNER IMAGE="+this.getBannerImage()+" SHOP DESCRIPTION="+this.getShopDescription();
		return shopString;
	}
}
