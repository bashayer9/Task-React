import React from 'react';
import styles from './FoodList.module.css';
// استيراد الصور من مجلد assets
import saladImg from '../../assets/salad.jpg';
import noodlesImg from '../../assets/Chicken Noodles.webp'; // تأكدي من مطابقة الاسم والامتداد بدقة
import smoothieImg from '../../assets/Smoothie Fruits.jpg';
import wingsImg from '../../assets/Hot Chicken Wings.jpg';



const FoodList = () => {
  // 2. إضافة مسار الصورة لكل عنصر في المصفوفة
  const foods = [
    { id: 1, name: 'Fresh Salad Bowl', price: 'IDR 45.000', image: saladImg },
    { id: 2, name: 'Chicken Noodles', price: 'IDR 75.000', image: noodlesImg },
    { id: 3, name: 'Smoothie Fruits', price: 'IDR 45.000', image: smoothieImg },
    { id: 4, name: 'Hot Chicken Wings', price: 'IDR 45.000', image: wingsImg },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>Most Ordered Food</h3>
        <p>Adipiscing elit, sed do eiusmod tempor</p>
      </div>

      <div className={styles.list}>
        {foods.map((food) => (
          <div key={food.id} className={styles.foodItem}>
            {/* 3. عرض الصورة هنا */}
            <div className={styles.imageWrapper}>
                <img src={food.image} alt={food.name} className={styles.foodImage} />
            </div>
            
            <div className={styles.foodInfo}>
              <span className={styles.foodName}>{food.name}</span>
            </div>
            <span className={styles.foodPrice}>{food.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodList;
