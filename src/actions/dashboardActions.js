import * as allActions from '../actions/allActions';


export function addNewBook(newBook){
	return {type: allActions.ADD_NEW_DASHBOARD_BOOK, newBook: newBook};
}

export function setSelectedBook(selectedBook) {

	//ask server to give you object under this id: selectedBook.id
	var selectedBookData = {};
	if(selectedBook.id % 2 === 0){
		selectedBookData = {'id': '1', 'status': 'A', 'dashboardBookListId': '4', 'url': selectedBook.url, 'title': 'Alice in Wonderland', 'subtitle': 'explore the universe', 'author': 'Lewis Carroll', 'image': 'https://images.gr-assets.com/books/1451442088l/24817626.jpg', 'bookContent': "When Chloe arrives home from school, she always makes a cup of coffee and then goes upstairs to her bedroom. This is her favourite time of day. The house is quiet and she can play with her pet rats. Yes, that's right, pet rats! Chloe has got two of them. Their names are Zena and Roxy and they live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats or they think rats are dirty. A year ago, Chloe didn't like rats either. Then, one day, her friend Martin showed Chloe his pet rats and Chloe saw how intelligent and affectionate they are. 'If you can have cats, dogs or hamsters as pets, then why not rats?' she thought. When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her mum and dad didn't like the idea, but then Chloe got an excellent school report and they decided to give Chloe the present she wanted. 'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and they never go to other rooms, especially not the kitchen!' In her room, Chloe opened the cage. First she picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore. She climbed furniture and went under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder while Chloe sent messages to her friends or read a book. Someone knocked on the door. 'Hi, Chloe,' called Mum. 'Are you there?' 'Yes, Mum,' said Chloe. 'Come in.' 'I'm going to my aerobics class. I'll be back at seven o'clock. Dad's on his way home. He's making pasta tonight.' 'OK, Mum. See you later', Chloe replied. Mum closed the door. Chloe put Zena back in the cage and called for Roxy. 'Roxy?' said Chloe. 'Roxy, where are you?' Roxy usually came when Chloe said her name. Chloe started to look for her. Where could Roxy be? 'She must be here somewhere,' thought Chloe, 'but Mum was here and Mum opened the door! Oh no! Roxy could be in the bathroom or living room ... or even the kitchen!' Chloe started to search the house. First, she looked in her parents' room and the bathroom but Roxy wasn't there. Next, she went downstairs and looked in the kitchen. She opened cupboards and drawers, calling Roxy's name all the time. She looked under the table and behind the fridge. She looked in the washing machine too, but Roxy wasn't there. 'Hi, Chloe!' said Dad as he came into the kitchen with a bag of tomatoes and pasta. 'Are you OK?' he asked. 'Yes, I'm ... I'm ...' Chloe wanted to say 'I'm fine', but she wasn't fine and she needed Dad's help. 'Dad, I've ... I've ... I've lost Roxy!' she said. 'I see,' said Dad, putting down the shopping bag. 'Don't worry, we'll find her. She can't be far!' Chloe and her dad looked all over the house but they couldn't find Roxy anywhere. Chloe went upstairs to look in her room for the third time. Then, she heard a key in the door and Mum calling, 'It's me, I'm home'. 'Oh, no!' thought Chloe. 'Mum's going to be angry!' She decided to stay in her room and wait for Dad to tell Mum about Roxy. Then Dad laughed and Mum called out, 'Chloe, come downstairs'. Chloe went downstairs and there was Mum with a smile on her face and Roxy on her shoulder. 'Oh, Mum, you found her!' said Chloe. 'Where was she?' 'When I arrived at the gym,' said Mum, 'I opened my bag and found Roxy. She was sleeping in one of my shoes'. 'Oh, sorry, Mum. Are you angry?' asked Chloe. 'No, I'm not angry. I picked her up for the first time and do you know what? Now, I think I like rats too!' When Chloe arrives home from school, she always makes a cup of coffee and then goes upstairs to her bedroom. This is her favourite time of day. The house is quiet and she can play with her pet rats. Yes, that's right, pet rats! Chloe has got two of them. Their names are Zena and Roxy and they live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats or they think rats are dirty. A year ago, Chloe didn't like rats either. Then, one day, her friend Martin showed Chloe his pet rats and Chloe saw how intelligent and affectionate they are. 'If you can have cats, dogs or hamsters as pets, then why not rats?' she thought. When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her mum and dad didn't like the idea, but then Chloe got an excellent school report and they decided to give Chloe the present she wanted. 'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and they never go to other rooms, especially not the kitchen!' In her room, Chloe opened the cage. First she picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore. She climbed furniture and went under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder while Chloe sent messages to her friends or read a book. Someone knocked on the door. 'Hi, Chloe,' called Mum. 'Are you there?' 'Yes, Mum,' said Chloe. 'Come in.' 'I'm going to my aerobics class. I'll be back at seven o'clock. Dad's on his way home. He's making pasta tonight.' 'OK, Mum. See you later', Chloe replied. Mum closed the door. Chloe put Zena back in the cage and called for Roxy. 'Roxy?' said Chloe. 'Roxy, where are you?' Roxy usually came when Chloe said her name. Chloe started to look for her. Where could Roxy be? 'She must be here somewhere,' thought Chloe, 'but Mum was here and Mum opened the door! Oh no! Roxy could be in the bathroom or living room ... or even the kitchen!' Chloe started to search the house. First, she looked in her parents' room and the bathroom but Roxy wasn't there. Next, she went downstairs and looked in the kitchen. She opened cupboards and drawers, calling Roxy's name all the time. She looked under the table and behind the fridge. She looked in the washing machine too, but Roxy wasn't there. 'Hi, Chloe!' said Dad as he came into the kitchen with a bag of tomatoes and pasta. 'Are you OK?' he asked. 'Yes, I'm ... I'm ...' Chloe wanted to say 'I'm fine', but she wasn't fine and she needed Dad's help. 'Dad, I've ... I've ... I've lost Roxy!' she said. 'I see,' said Dad, putting down the shopping bag. 'Don't worry, we'll find her. She can't be far!' Chloe and her dad looked all over the house but they couldn't find Roxy anywhere. Chloe went upstairs to look in her room for the third time. Then, she heard a key in the door and Mum calling, 'It's me, I'm home'. 'Oh, no!' thought Chloe. 'Mum's going to be angry!' She decided to stay in her room and wait for Dad to tell Mum about Roxy. Then Dad laughed and Mum called out, 'Chloe, come downstairs'. Chloe went downstairs and there was Mum with a smile on her face and Roxy on her shoulder. 'Oh, Mum, you found her!' said Chloe. 'Where was she?' 'When I arrived at the gym,' said Mum, 'I opened my bag and found Roxy. She was sleeping in one of my shoes'. 'Oh, sorry, Mum. Are you angry?' asked Chloe. 'No, I'm not angry. I picked her up for the first time and do you know what? Now, I think I like rats too!'" };
	}else if(selectedBook.id % 3 === 1){
		selectedBookData = {'id': '1', 'status': 'A', 'dashboardBookListId': '4', 'url': selectedBook.url, 'title': 'Alice in Wonderland', 'subtitle': 'explore the universe', 'author': 'Lewis Carroll', 'image': 'https://images.gr-assets.com/books/1451442088l/24817626.jpg', 'bookContent': "always makes a cup of coffee always makes a cup of coffee always makes a cup of coffee always makes a cup of coffee always makes a cup of coffee always makes a cup of coffee always makes a cup of coffee" };
	}else {
		selectedBookData = {'id': '1', 'status': 'A', 'dashboardBookListId': '4', 'url': selectedBook.url, 'title': 'Alice in Wonderland', 'subtitle': 'explore the universe', 'author': 'Lewis Carroll', 'image': 'https://images.gr-assets.com/books/1451442088l/24817626.jpg', 'bookContent': "When Chloe arrives home from school, she always makes a cup of coffee and then goes upstairs to her bedroom. This is her favourite time of day. The house is quiet and she can play with her pet rats. Yes, that's right, pet rats! Chloe has got two of them. Their names are 't she wanted. 'Ther aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa rats. Yes, that's right, pet rats! Chloe has got two of them. Their names are Zena and Roxy and they live in a cage in Chloe's bedroom. Chloe knows that most people don't like rats or they think rats are dirty. A year ago, Chloe didn't like rats either. Then, one day, her friend Martin showed Chloe his pet rats and Chloe saw how intelligent and affectionate they are. 'If you can have cats, dogs or hamsters as pets, then why not rats?' she thought. When one of Martin's rats had babies, Chloe asked her mum if she could have two pet rats for her birthday present. Her mum and dad didn't like the idea, but then Chloe got an excellent school report and they decided to give Chloe the present she wanted. 'There’s one very important rule,' said Chloe's mum. 'The rats live in your bedroom and they never go to other rooms, especially not the kitchen!' In her room, Chloe opened the cage. First she picked up Roxy and put her on the floor. Then she picked up Zena and put her on her shoulder. Roxy loved to explore. She climbed furniture and went under Chloe's bed. Zena was quieter and liked sitting on Chloe's shoulder while Chloe sent messages to her friends or read a book. Someone knocked on the door. 'Hi, Chloe,' called Mum. 'Are you there?' 'Yes, Mum,' said Chloe. 'Come in.' 'I'm going to my aerobics class. I'll be back at seven o'clock. Dad's on his way home. He's making pasta tonight.' 'OK, Mum. See you later', Chloe replied. Mum closed the door. Chloe put Zena back in the cage and called for Roxy. 'Roxy?' said Chloe. 'Roxy, where are you?' Roxy usually came when Chloe said her name. Chloe started to look for her. Where could Roxy be? 'She must be here somewhere,' thought Chloe, 'but Mum was here and Mum opened the door! Oh no! Roxy could be in the bathroom or living room ... or even the kitchen!' Chloe started to search the house. First, she looked in her parents' room and the bathroom but Roxy wasn't there. Next, she went downstairs and looked in the kitchen. She opened cupboards and drawers, calling Roxy's name all the time. She looked under the table and behind the fridge. She looked in the washing machine too, but Roxy wasn't there. 'Hi, Chloe!' said Dad as he came into the kitchen with a bag of tomatoes and pasta. 'Are you OK?' he asked. 'Yes, I'm ... I'm ...' Chloe wanted to say 'I'm fine', but she wasn't fine and she needed Dad's help. 'Dad, I've ... I've ... I've lost Roxy!' she said. 'I see,' said Dad, putting down the shopping bag. 'Don't worry, we'll find her. She can't be far!' Chloe and her dad looked all over the house but they couldn't find Roxy anywhere. Chloe went upstairs to look in her room for the third time. Then, she heard a key in the door and Mum calling, 'It's me, I'm home'. 'Oh, no!' thought Chloe. 'Mum's going to be angry!' She decided to stay in her room and wait for Dad to tell Mum about Roxy. Then Dad laughed and Mum called out, 'Chloe, come downstairs'. Chloe went downstairs and there was Mum with a smile on her face and Roxy on her shoulder. 'Oh, Mum, you found her!' said Chloe. 'Where was she?' 'When I arrived at the gym,' said Mum, 'I opened my bag and found Roxy. She was sleeping in one of my shoes'. 'Oh, sorry, Mum. Are you angry?' asked Chloe. 'No, I'm not angry. I picked her up for the first time and do you know what? Now, I think I like rats too!'" };
	}
	return {type: allActions.SELECTED_BOOK, selectedBookData: selectedBookData};
}
