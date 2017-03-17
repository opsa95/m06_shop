function itemObj () {
	//Attributes declaration
	this.id;
	this.itemName;
	this.itemDescription;
	this.itemPrice;
	this.itemUnits;
	this.itemAvailableDate;
	this.itemExpirationDate;
	this.itemImage;

	//Methods declaration
	this.construct = function (id,itemName,itemDescription,itemPrice,itemUnits,itemAvailableDate,itemExpirationDate,itemImage) {
		this.setId(id);
		this.setItemName(itemName);
		this.setItemDescription(itemDescription);
		this.setItemPrice(itemPrice);
		this.setItemUnits(itemUnits);
		this.setItemAvailableDate(itemAvailableDate);
		this.setItemExpirationDate(itemExpirationDate);
		this.setItemImage(itemImage);
	}

	this.setId = function (id){this.id=id;}
	this.setItemName = function (itemName){this.itemName=itemName;}
	this.setItemDescription = function (itemDescription){this.itemDescription=itemDescription;}
	this.setItemPrice = function (itemPrice){this.itemPrice=itemPrice;}
	this.setItemUnits = function (itemUnits){this.itemUnits=itemUnits;}
	this.setItemAvailableDate = function (itemAvailableDate){this.itemAvailableDate=itemAvailableDate;}
	this.setItemExpirationDate = function (itemExpirationDate){this.itemExpirationDate=itemExpirationDate;}
	this.setItemImage = function (itemImage){this.itemImage=itemImage;}

	this.getId = function () {return this.id;}
	this.getItemName = function (){return this.itemName;}
	this.getItemDescription = function (){return this.itemDescription;}
	this.getItemPrice = function (){return this.itemPrice;}
	this.getItemUnits = function (){return this.itemUnits;}
	this.getItemAvailableDate = function (){return this.itemAvailableDate;}
	this.getItemExpirationDate = function (){return this.itemExpirationDate;}
	this.getItemImage = function (){return this.itemImage;}

	this.arrayToString = function (arrayItemObj) {
		var itemString ="";
		$.each(arrayItemObj, function (index, item){
			itemString+="stock number "+(index+1)+":"+item.toString()+"\n";
		});
		return itemString;
}

	this.toString = function (){
		var itemString = "ITEM - ID="+this.getId()+" ITEM NAME="+this.getItemName()+" ITEM DESCRIPTION="+this.getItemDescription();
		itemString += "ITEM PRICE="+this.getItemPrice()+" AVAILABLE UNITS="+this.getItemUnits()+" AVAILABLE SINCE="+this.getItemAvailableDate();
		itemString += "EXPIRATION DATE="+this.getExpirationDate()+" ITEM IMAGE="+this.getItemIMAGE();
		return itemString;
	}
}
