export const serviceCategories = [
  "All Services",
  "Joint Care",
  "Spine Care",
  "Bone & Injury Care",
  "Musculoskeletal Care",
  "Specialist Consultation"
];

export const services = [
  {
    slug: "knee-pain-treatment",
    title: "Knee Pain & Joint Preservation",
    category: "Joint Care",
    icon: "Activity",
    shortDescription: "Specialized clinical diagnosis and conservative management for acute and chronic knee pain, meniscus injuries, and degenerative osteoarthritis.",
    heroImage: "/service/serviceimage-01.webp",
    secondaryImage: "/service/serviceimage-02.webp",
    seo: {
      title: "Knee Pain Treatment & Joint Preservation | S.N. Health Care",
      description: "Comprehensive medical evaluation, non-surgical therapies, and rehabilitation for knee pain, cartilage wear, and ligament tears by Dr. P. Y. Srinivasa Rao.",
      keywords: "knee pain treatment, osteoarthritis knee, meniscus tear, joint preservation, Visakhapatnam orthopedic"
    },
    introduction: `The knee is one of the most complex weight-bearing joints in the human body, composed of the femur (thigh bone), tibia (shin bone), and patella (kneecap), cushioned by resilient articular cartilage and two C-shaped shock absorbers known as menisci. When any element of this intricate biomechanical system experiences wear, trauma, or inflammation, routine daily movements such as climbing stairs, standing up from a chair, or walking even short distances can become intensely painful.

At S.N. Health Care, our approach to knee pain centers on identifying the exact mechanical and structural origins of discomfort. Rather than immediately resorting to invasive procedures or masking symptoms with temporary analgesics, Dr. P. Y. Srinivasa Rao conducts meticulous physical examinations to distinguish between patellofemoral tracking disorders, cartilage wear, soft tissue inflammation, and ligamentous laxity.

Preserving natural knee anatomy is our foremost clinical priority. Through modern non-surgical interventions, targeted muscle reconditioning, and viscosupplementation when indicated, the vast majority of knee complaints can achieve lasting pain relief, restored range of motion, and sustained functional independence.`,
    symptoms: [
      { name: "Weight-Bearing Discomfort", description: "Sharp or aching pain along the inner or outer knee joint line exacerbated by walking, standing, or squatting." },
      { name: "Morning Stiffness & Gel Phenomenon", description: "Tightness lasting 15 to 30 minutes upon waking, which gradually loosens after gentle movement." },
      { name: "Joint Catching or Locking", description: "A sensation that the knee joint is temporarily stuck or clicking painfully during bending or straightening." },
      { name: "Effusion & Local Swelling", description: "Fluid accumulation causing visible puffiness, tightness behind the knee, or warmth to the touch." },
      { name: "Crepitus & Grinding Sensation", description: "Audible crunching or grinding vibrations felt under the kneecap during stair navigation.", isWarning: false },
      { name: "Knee Giving Way / Instability", description: "Sudden buckling of the knee under body weight, frequently indicating ligament or meniscal compromise.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Osteoarthritis (Degenerative Joint Disease)", description: "Progressive loss of articular cartilage leading to friction between subchondral bone surfaces, osteophyte formation, and reactive synovitis." },
      { name: "Meniscal Tears", description: "Tears in the shock-absorbing fibrocartilage rings caused by rotational twisting injuries in younger patients or gradual attrition in older adults." },
      { name: "Ligamentous Sprains (ACL / PCL / MCL)", description: "Overstretching or partial tears of primary stabilizing knee ligaments from sudden deceleration or sports pivots." },
      { name: "Patellofemoral Pain Syndrome (Runner's Knee)", description: "Irritation of the cartilage behind the patella due to quadriceps muscle imbalances or faulty patellar tracking." },
      { name: "Bursitis & Tendonitis", description: "Inflammation of the prepatellar bursa or patellar tendon commonly triggered by repetitive kneeling or overuse." }
    ],
    assessment: [
      { step: "Comprehensive Clinical History", detail: "Detailed inquiry into onset chronicity, triggering motions, previous trauma, occupational load, and past therapies." },
      { step: "Physical & Biomechanical Exam", detail: "Palpation of joint margins, assessment of varus/valgus alignment, patellar tracking, and specialized stability tests (Lachman, McMurray, Anterior Drawer)." },
      { step: "Weight-Bearing Digital Radiography", detail: "Standing X-rays to assess true joint space narrowing, subchondral sclerosis, and bone spur morphology." },
      { step: "Advanced Imaging Correlation (MRI/Ultrasound)", detail: "Requested selectively when soft tissue, meniscal root integrity, or ligament tears require detailed anatomical visualization." }
    ],
    treatmentApproach: [
      { phase: "Targeted Anti-Inflammatory Care", detail: "Evidence-based pharmacology and topical modalities to quell acute synovitis and break the chronic pain cycle." },
      { phase: "Vastus Medialis & Hamstring Strengthening", detail: "Customized corrective exercises to offload joint contact stress and correct patellar tracking forces." },
      { phase: "Viscosupplementation & Intra-Articular Injections", detail: "Hyaluronic acid lubrication or targeted anti-inflammatory injections for patients with persistent joint friction." },
      { phase: "Biomechanical Bracing & Orthotics", detail: "Unloader braces and custom arch supports to redistribute medial compartment loads during daily ambulation." }
    ],
    whatToExpect: "During your consultation with Dr. P. Y. Srinivasa Rao, please wear loose, comfortable clothing such as shorts or track pants to allow thorough examination of both knees. Bring any prior X-rays, MRI scans, or prescription records. The doctor will assess your walking gait, joint stability, and pain triggers before outlining a clear, individualized recovery pathway.",
    whenToSeekCare: [
      "Inability to bear any weight on the injured leg after an acute twist or fall.",
      "Rapid, tense swelling developing within two hours of trauma (suggestive of hemarthrosis).",
      "Severe knee locking where the joint cannot be straightened at all.",
      "Redness, intense heat, and high fever accompanied by severe joint pain (requires urgent septic arthritis rule-out)."
    ],
    faqs: [
      { q: "Is knee replacement always inevitable for osteoarthritis?", a: "No. The vast majority of mild to moderate knee arthritis cases can be managed conservatively with targeted quadriceps strengthening, weight modulation, low-impact exercise, and lubricating injections. Surgery is only considered for severe end-stage bone-on-bone arthritis when non-surgical measures fail to provide functional relief." },
      { q: "How long does a meniscus tear take to heal without surgery?", a: "Tears in the vascular outer one-third (red zone) of the meniscus often respond well to 6–12 weeks of structured physical therapy and protected loading. Complex tears in the avascular inner zone may require specialized assessment to determine whether non-operative stabilization is appropriate." },
      { q: "Are lubricating (hyaluronic acid) injections safe?", a: "Yes. Hyaluronic acid is a naturally occurring component of healthy synovial fluid. Intra-articular viscosupplementation injections act as shock absorbers and joint lubricants, providing months of reduced friction with minimal systemic side effects." },
      { q: "Can I still exercise if I have knee pain?", a: "Yes, and in fact, immobility usually worsens joint stiffness. We recommend non-impact activities such as stationary cycling, aquatic exercises, and isometric quad sets while avoiding deep squats or high-impact jogging until the joint stabilizes." },
      { q: "What is the difference between an X-ray and an MRI for knee evaluation?", a: "X-rays are outstanding for evaluating bone alignment, joint space width, and arthritis. However, X-rays cannot see soft tissues like ligaments, tendons, and menisci—which is where MRI is utilized when clinically indicated." },
      { q: "How does body weight affect knee joint stress?", a: "With every step you take on level ground, your knees bear approximately 3 to 4 times your total body weight. Shedding even 5 kg reduces 15 to 20 kg of mechanical impact across the joint with every single stride." }
    ],
    relatedServices: ["hip-pain-treatment", "osteoarthritis-care", "sports-injuries"]
  },
  {
    slug: "back-pain-treatment",
    title: "Back Pain & Lumbar Spine Care",
    category: "Spine Care",
    icon: "ShieldAlert",
    shortDescription: "In-depth diagnostic evaluation and non-surgical rehabilitation for acute muscle spasms, disc herniation, facet arthropathy, and chronic lumbar strain.",
    heroImage: "/service/serviceimage-03.webp",
    secondaryImage: "/service/serviceimage-04.webp",
    seo: {
      title: "Back Pain & Lumbar Spine Treatment | S.N. Health Care",
      description: "Expert orthopedic spine care for lower back pain, disc bulge, and postural strain by Dr. P. Y. Srinivasa Rao. Evidence-based conservative rehabilitation.",
      keywords: "back pain treatment, lumbar spine, disc bulge, lower back specialist, Dr P Y Srinivasa Rao"
    },
    introduction: `Low back pain is the single leading cause of physical disability globally, affecting individuals of all age groups from desk workers to manual laborers. The lumbar spine is an architectural marvel designed to support the torso, protect spinal nerves, and provide rotational flexibility. It comprises five sturdy vertebrae separated by shock-absorbing intervertebral discs, reinforced by strong ligaments and deep postural musculature.

At S.N. Health Care, we believe that an accurate anatomical diagnosis is the cornerstone of effective back recovery. Most back pain is mechanical in nature—arising from muscular imbalances, facet joint inflammation, sacroiliac dysfunction, or disc desiccation. 

Dr. P. Y. Srinivasa Rao emphasizes holistic conservative spine care that goes far beyond bed rest. By combining targeted spine biomechanics, core stabilization, ergonomic workplace adjustments, and precision medical therapies, we help patients overcome debilitating episodes and prevent recurrent flares.`,
    symptoms: [
      { name: "Localized Lumbar Ache", description: "Dull, continuous muscular tension across the lower back, often worsening after prolonged sitting or bending." },
      { name: "Acute Muscle Spasms", description: "Sudden, painful locking of spinal muscles that severely restricts upright standing or turning." },
      { name: "Morning Spine Stiffness", description: "Difficulty bending or feeling 'frozen' in the lumbar region for the first 30 minutes of the day." },
      { name: "Pain Aggravated by Prolonged Sitting", description: "Increased disc pressure while seated that forces frequent posture adjustments or standing." },
      { name: "Radiating Pain to Buttocks", description: "Discomfort extending into the gluteal muscles or posterior thigh without extending past the knee." },
      { name: "Loss of Bladder/Bowel Sensation", description: "Numbness in the saddle area or loss of sphincter control (requires immediate emergency room evaluation).", isWarning: true }
    ],
    possibleCauses: [
      { name: "Acute Paraspinal Muscle Strain", description: "Microscopic tearing of spinal muscle fibers and ligaments following unconditioned lifting, twisting, or poor ergonomics." },
      { name: "Lumbar Disc Herniation / Bulge", description: "Displacement of the inner nucleus pulposus through a weakened outer annulus fibrosus, contacting nearby nerve structures." },
      { name: "Lumbar Spondylosis (Spinal Arthritis)", description: "Degenerative wear of lumbar facet joints accompanied by osteophyte formation and reduced disc height." },
      { name: "Sacroiliac (SI) Joint Dysfunction", description: "Abnormal movement or inflammation in the joints linking the base of the spine to the pelvis." },
      { name: "Spinal Canal Stenosis", description: "Narrowing of the spinal canal in older adults, causing heaviness and discomfort during walking that relieves upon leaning forward." }
    ],
    assessment: [
      { step: "Detailed Mechanical History", detail: "Tracing the aggravating postures (flexion vs. extension dominance), work habits, previous episodes, and response to movement." },
      { step: "Neurological & Range of Motion Evaluation", detail: "Testing deep tendon reflexes, dermatomal sensation, motor power (L4, L5, S1), and provocative tests like the Straight Leg Raise." },
      { step: "Digital Lumbosacral X-Rays", detail: "Standing views assessing lordotic curvature, disc height maintenance, and spondylolisthesis (vertebral slipping)." },
      { step: "Lumbar MRI Referral", detail: "Conducted when red flags are present, radiculopathy persists past 4–6 weeks, or neural compression requires detailed verification." }
    ],
    treatmentApproach: [
      { phase: "Spasm Reduction & Pain Control", detail: "Short-term targeted analgesics, muscle relaxants, and local heat therapy to allow early gentle mobility." },
      { phase: "Lumbar Stabilization Program", detail: "Progressive activation of the transversus abdominis, multifidus, and gluteal complexes to build a natural internal back brace." },
      { phase: "Ergonomic & Postural Re-Education", detail: "Custom workstation guidelines, lumbar support utilization, and hip-hinge movement mechanics for daily tasks." },
      { phase: "Spine-Preserving Lifestyle Protocol", detail: "Walking programs, core endurance routines, and avoidance of prolonged static flexion postures." }
    ],
    whatToExpect: "Your initial spine evaluation includes an in-depth review of your daily activities, posture, and sleep environment. Dr. Rao will palpate spinal segments, test nerve functions, and demonstrate proper lifting mechanics. We encourage patients to bring their most recent X-ray or MRI films.",
    whenToSeekCare: [
      "Sudden numbness in the groin, inner thighs, or perianal region (saddle anesthesia).",
      "New incontinence or inability to urinate (Cauda Equina Syndrome emergency).",
      "Progressive weakness in the foot causing 'foot drop' or tripping while walking.",
      "Back pain accompanied by unexplained weight loss, constant night pain, or active fever."
    ],
    faqs: [
      { q: "Is strict bed rest recommended for severe back pain?", a: "No. Clinical evidence clearly demonstrates that prolonged bed rest beyond 24–48 hours leads to muscle deconditioning, increased stiffness, and delayed recovery. Gentle walking and controlled posture changes are much more effective." },
      { q: "Does every disc herniation require surgery?", a: "Over 90% of lumbar disc herniations resolve or stabilize with conservative medical management, targeted physical therapy, and time. The body often naturally resorbs herniated material over several months." },
      { q: "What type of mattress is best for bad back pain?", a: "A medium-firm mattress typically provides the optimal balance of spinal alignment and pressure-point cushioning. Excessively soft mattresses cause the spine to sag, while rock-hard beds create unnecessary pressure points." },
      { q: "Can core exercises cure my back pain?", a: "Core exercises do not 'cure' spinal anatomy, but they build muscular endurance that shields spinal joints and discs from excessive mechanical stress, dramatically lowering the risk of future flare-ups." },
      { q: "When is an MRI necessary for back pain?", a: "An MRI is generally reserved for patients exhibiting neurological deficits (numbness, weakness), unyielding pain persisting beyond 6 weeks of conservative care, or suspected infections/tumors." },
      { q: "How does sitting for long hours damage the lower back?", a: "Sitting increases intradiscal pressure by up to 40% compared to standing, stretches posterior spinal ligaments, and deactivates the gluteal stabilizing muscles." }
    ],
    relatedServices: ["sciatica-treatment", "disc-disorders", "neck-pain-treatment"]
  },
  {
    slug: "shoulder-pain-treatment",
    title: "Shoulder Pain & Rotator Cuff Care",
    category: "Joint Care",
    icon: "Zap",
    shortDescription: "Specialist diagnosis for rotator cuff impingement, frozen shoulder (adhesive capsulitis), bursitis, and shoulder instability.",
    heroImage: "/service/serviceimage-05.webp",
    secondaryImage: "/service/serviceimage-06.webp",
    seo: {
      title: "Shoulder Pain & Rotator Cuff Care | S.N. Health Care",
      description: "Comprehensive shoulder evaluation and rehabilitation for frozen shoulder, rotator cuff tendonitis, and impingement by Dr. P. Y. Srinivasa Rao.",
      keywords: "shoulder pain doctor, rotator cuff treatment, frozen shoulder, adhesive capsulitis, Visakhapatnam orthopedic"
    },
    introduction: `The shoulder is the most mobile joint in the entire human body, operating as a ball-and-socket mechanism where a relatively large humeral head rests against a shallow glenoid cavity. This remarkable range of motion comes at the cost of inherent bony stability, requiring an intricate network of tendons known as the rotator cuff (supraspinatus, infraspinatus, teres minor, subscapularis) to keep the joint dynamically centered.

Shoulder pain commonly interferes with essential personal activities such as reaching overhead, combing hair, fastening garments behind the back, and enjoying restful sleep. At S.N. Health Care, Dr. P. Y. Srinivasa Rao takes a thorough clinical approach to differentiate between subacromial bursitis, rotator cuff tendinopathy, labral tears, and adhesive capsulitis (frozen shoulder).

Our clinical emphasis focuses on restoring full pain-free scapulohumeral rhythm, relieving inflamed subacromial tissues, and preventing long-term muscular atrophy.`,
    symptoms: [
      { name: "Pain During Overhead Reaching", description: "Pinching pain when raising the arm between 60 and 120 degrees (the painful arc)." },
      { name: "Night Pain When Lying on the Shoulder", description: "Discomfort that wakes you up from sleep or prevents lying on the affected side." },
      { name: "Progressive Loss of Movement", description: "Inability to reach into back pockets or lift the arm above horizontal level." },
      { name: "Shoulder Weakness", description: "Difficulty holding light objects or pouring from a jug due to muscular fatigue or pain." },
      { name: "Audible Clicking & Catching", description: "Snapping sensations during arm rotation originating from bursal thickening or labral fraying." },
      { name: "Shoulder Dislocation Sensation", description: "A feeling that the joint is popping out of its socket, often following past trauma.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Rotator Cuff Tendinopathy & Tears", description: "Micro-tearing or degeneration of the supraspinatus tendon from repetitive overhead strain or age-related attrition." },
      { name: "Adhesive Capsulitis (Frozen Shoulder)", description: "Profound contracture and thickening of the glenohumeral capsule, progressing through freezing, frozen, and thawing phases." },
      { name: "Subacromial Impingement & Bursitis", description: "Compression of the rotator cuff and subacromial bursa beneath the acromion bone during arm elevation." },
      { name: "Calcific Tendonitis", description: "Deposition of calcium crystals within tendon fibers, causing sudden, intense chemical inflammation." },
      { name: "Acromioclavicular (AC) Joint Arthritis", description: "Degeneration of the joint linking the collarbone to the shoulder blade top." }
    ],
    assessment: [
      { step: "Scapular Rhythm & Posture Inspection", detail: "Observation of scapular winging, asymmetry, and shoulder elevation patterns from behind." },
      { step: "Specialized Orthopedic Provocative Tests", detail: "Neer, Hawkins-Kennedy, Empty Can, and Speed's tests to isolate specific tendons and bursae." },
      { step: "Active vs. Passive Range Testing", detail: "Distinguishing frozen shoulder (both active and passive restricted) from rotator cuff tears (passive preserved, active restricted)." },
      { step: "Digital Radiography & Ultrasound", detail: "Evaluating bony spurs on the acromion, calcifications, and dynamic tendon movement." }
    ],
    treatmentApproach: [
      { phase: "Subacromial Decompression Exercises", detail: "Postural correction and rotator cuff depression exercises to create more space in the subacromial arch." },
      { phase: "Targeted Infiltration Therapy", detail: "Precision subacromial or glenohumeral injections for acute pain relief in severe frozen shoulder or impingement." },
      { phase: "Scapulothoracic Stabilization", detail: "Strengthening serratus anterior and lower trapezius to ensure smooth shoulder blade movement." },
      { phase: "Capsular Stretching Protocols", detail: "Gentle, non-aggressive passive stretching routines to gradually expand the contracted joint capsule." }
    ],
    whatToExpect: "Wear a loose t-shirt or sleeveless top so Dr. Rao can examine your neck, upper back, and both shoulders simultaneously. He will test strength in multiple arm positions and assess for radiating pain from the cervical spine.",
    whenToSeekCare: [
      "Sudden inability to lift the arm after an acute fall or heavy jerk.",
      "Visible shoulder deformity or bone prominence following high-energy trauma.",
      "Shoulder pain accompanied by shortness of breath, chest pressure, or radiating down the left arm (requires immediate cardiac rule-out).",
      "Rapidly developing severe swelling and fever over the shoulder joint."
    ],
    faqs: [
      { q: "How do I know if I have frozen shoulder or a rotator cuff tear?", a: "In frozen shoulder, the joint is physically stiff and cannot be moved by yourself OR by the examining doctor (loss of passive motion). In a rotator cuff tear, you cannot lift the arm yourself due to pain or weakness, but the doctor can usually lift it passively for you." },
      { q: "How long does frozen shoulder take to recover?", a: "Frozen shoulder typically evolves through three stages over 12 to 24 months. With early intervention, targeted physical therapy, and anti-inflammatory procedures, this timeline can often be shortened significantly." },
      { q: "Can a rotator cuff tear heal without surgery?", a: "Partial tears and degenerative tears often respond remarkably well to specialized rehabilitation, muscle rebalancing, and anti-inflammatory management. Complete traumatic tears in active patients are evaluated for surgical repair." },
      { q: "Why does shoulder pain get worse at night?", a: "When lying down, gravity no longer pulls the arm down to decompress the subacromial space. Furthermore, local blood flow changes and pressure from the mattress increase inflammatory sensitivity in the bursae." },
      { q: "Is sleeping with your arm overhead bad?", a: "Yes, this position pinches the rotator cuff tendons against the acromion bone, exacerbating subacromial impingement." },
      { q: "Are cortisone injections harmful to shoulder tendons?", a: "When administered judiciously and precisely by an experienced orthopedic specialist, a steroid injection safely quells severe bursal inflammation. Repeated unmonitored injections are avoided to prevent tendon weakening." }
    ],
    relatedServices: ["neck-pain-treatment", "knee-pain-treatment", "orthopedic-consultation"]
  },
  {
    slug: "sciatica-treatment",
    title: "Sciatica & Nerve Compression Care",
    category: "Spine Care",
    icon: "Zap",
    shortDescription: "Specialist diagnosis and relief for shooting leg pain, tingling, numbness, and lumbar nerve root compression.",
    heroImage: "/service/serviceimage-07.webp",
    secondaryImage: "/service/serviceimage-08.webp",
    seo: {
      title: "Sciatica Treatment & Nerve Pain Relief | S.N. Health Care",
      description: "Relief for shooting leg pain, lumbar disc herniation, and piriformis syndrome by Dr. P. Y. Srinivasa Rao. Non-surgical spine and nerve care.",
      keywords: "sciatica treatment, shooting leg pain, pinched nerve, lumbar radiculopathy, Visakhapatnam orthopedic"
    },
    introduction: `The sciatic nerve is the longest and thickest nerve in the entire human body, originating from multiple nerve roots in the lumbar and sacral spine (L4 to S3), traveling through the pelvis and deep gluteal region, and extending down the back of the thigh, calf, and into the toes. 

When one of these spinal nerve roots becomes pinched, chemically irritated, or compressed by a herniated disc, bone spur, or tight muscle, the resulting pain can be electric, searing, and profoundly disabling. Patients frequently describe sciatica not just as back pain, but as an unbearable shock or burning sensation that shoots down one leg.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao conducts precise neurological examinations to pinpoint the exact level of nerve entrapment (most commonly L4-L5 or L5-S1) and determine whether conservative nerve decompression therapies can relieve the irritation without surgical intervention.`,
    symptoms: [
      { name: "Shooting or Searing Leg Pain", description: "Sharp, lightning-like pain originating in the lower back or buttock and traveling down the back or side of the leg." },
      { name: "Pins & Needles Paresthesia", description: "Pricking sensations, numbness, or loss of normal skin feeling along the calf, ankle, or toes." },
      { name: "Pain Aggravated by Coughing or Sneezing", description: "Sharp spikes of leg pain triggered by sudden increases in intra-abdominal pressure." },
      { name: "Heavy or Weak Leg Sensation", description: "Feeling that the affected leg is sluggish or uncoordinated during normal walking." },
      { name: "Unilateral Distribution", description: "Symptoms predominantly affect one side of the body at a time." },
      { name: "Progressive Foot Drop", description: "Inability to dorsiflex the foot (lift toes upward), causing tripping while walking.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Lumbar Intervertebral Disc Herniation", description: "Extrusion of disc core material that directly impinges upon the exiting nerve root." },
      { name: "Lumbar Foraminal Stenosis", description: "Narrowing of the bony exit canal through which spinal nerves leave the vertebral column." },
      { name: "Spondylolisthesis", description: "Forward slippage of one lumbar vertebra over another, creating traction on nerve roots." },
      { name: "Piriformis Syndrome", description: "Spasm or hypertrophy of the deep piriformis muscle in the buttock, compressing the sciatic nerve beneath it." }
    ],
    assessment: [
      { step: "Straight Leg Raise (Lasègue's Test)", detail: "Passive elevation of the affected leg to stretch the sciatic nerve and reproduce classic radicular pain." },
      { step: "Dermatome & Myotome Neurological Mapping", detail: "Testing ankle reflex (S1), knee jerk (L4), great toe extension (L5), and pinprick sensation." },
      { step: "High-Resolution Lumbar MRI Review", detail: "Careful anatomical correlation between the patient's clinical symptoms and MRI nerve root compression." }
    ],
    treatmentApproach: [
      { phase: "Neuro-Anti-Inflammatory Protocol", detail: "Specific neurotropic medications and anti-inflammatory compounds to decrease nerve edema and hypersensitivity." },
      { phase: "Nerve Flossing & Mobilization Exercises", detail: "Gentle nerve gliding techniques that encourage the sciatic nerve to slide smoothly through surrounding tissues." },
      { phase: "Decompression Postures & Pelvic Alignment", detail: "McKenzie extension or flexion bias postures to help centralize radicular leg symptoms." },
      { phase: "Core & Pelvic Stabilization", detail: "Strengthening deep stabilizers to prevent repeated micro-pinching at the affected spinal motion segment." }
    ],
    whatToExpect: "Dr. Rao will test your reflexes with a neurological reflex hammer, check muscle power in your feet and toes, and identify which specific spinal nerve is irritated. Bring any MRI reports or spine images available.",
    whenToSeekCare: [
      "Loss of bowel or bladder control (accidental leakage or inability to void).",
      "Numbness in the private genital and buttocks region (saddle anesthesia).",
      "Rapidly worsening muscle weakness where you cannot lift your foot or stand on your toes.",
      "Pain so agonizing that no resting position offers any relief whatsoever."
    ],
    faqs: [
      { q: "How long does a sciatica flare-up usually last?", a: "With appropriate conservative medical therapy and targeted exercises, the acute severe phase often calms down within 2 to 6 weeks. Complete nerve recovery may take several months as inflammation subsides." },
      { q: "Is walking good for sciatica?", a: "Yes, short, frequent walks on flat, even surfaces stimulate blood circulation to the nerve and reduce inflammatory fluid buildup. Avoid aggressive uphill hiking during an acute flare." },
      { q: "Can piriformis syndrome mimic sciatica?", a: "Yes. In about 15% of people, the sciatic nerve passes directly through or directly under the piriformis muscle. Muscle spasms here produce symptoms virtually identical to a lumbar disc herniation." },
      { q: "When is surgery indicated for sciatica?", a: "Surgery is generally considered only when there is severe progressive motor weakness (such as foot drop), cauda equina syndrome, or intractable pain that fails to improve after 8–12 weeks of comprehensive conservative treatment." },
      { q: "Why does sitting make sciatica worse?", a: "Sitting places direct pressure on the sciatic nerve pathway and increases lumbar disc pressure by over 40% compared to standing." },
      { q: "Can heat or ice help sciatic nerve pain?", a: "In the first 48 hours of an acute flare, ice applied to the lower back helps reduce nerve root inflammation. Thereafter, alternating with moist heat can relax tight gluteal and lumbar muscles." }
    ],
    relatedServices: ["back-pain-treatment", "disc-disorders", "hip-pain-treatment"]
  },
  {
    slug: "fracture-assessment",
    title: "Fracture Assessment & Trauma Care",
    category: "Bone & Injury Care",
    icon: "Bone",
    shortDescription: "Timely orthopedic evaluation, digital X-ray analysis, closed reduction, immobilization casting, and post-fracture rehabilitation.",
    heroImage: "/service/serviceimage-09.webp",
    secondaryImage: "/service/serviceimage-10.webp",
    seo: {
      title: "Fracture Assessment & Bone Injury Care | S.N. Health Care",
      description: "Specialized orthopedic assessment for broken bones, hair line fractures, splinting, and cast management by Dr. P. Y. Srinivasa Rao.",
      keywords: "fracture care, broken bone doctor, orthopedic cast, hairline fracture, trauma care Visakhapatnam"
    },
    introduction: `A bone fracture occurs when the physical force exerted on a bone exceeds its mechanical breaking point. Fractures range from subtle hairline stress cracks to displaced, comminuted, or angulated breaks that require immediate orthopedic intervention. Proper initial evaluation and anatomical reduction are critical to ensure that bones heal in optimal alignment without malunion, joint stiffness, or chronic post-traumatic pain.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao brings extensive clinical trauma experience to the assessment and management of bone injuries. We provide rapid clinical evaluation, high-definition digital X-ray interpretation, closed reduction where indicated, lightweight casting/splinting, and structured post-union rehabilitation.

Our goal is to safely guide each patient from the acute injury phase through complete bone consolidation and functional muscle restoration.`,
    symptoms: [
      { name: "Immediate Severe Pain", description: "Sharp, intense pain localized directly over the injured bone that spikes drastically with any attempt at movement." },
      { name: "Rapid Swelling & Hematoma", description: "Fast-developing swelling accompanied by purple or blue bruising over the fracture site." },
      { name: "Visible Deformity or Angulation", description: "Unnatural bending, shortening, or abnormal rotation of the limb compared to the opposite side." },
      { name: "Inability to Bear Weight", description: "Complete inability to support body weight on an injured leg, ankle, or foot." },
      { name: "Bony Crepitation", description: "A grinding or crunching sensation when the broken bone ends rub against each other." },
      { name: "Pale, Cold Limb or Numbness", description: "Loss of pulse, sensation, or capillary refill below the injury (urgent neurovascular emergency).", isWarning: true }
    ],
    possibleCauses: [
      { name: "High-Energy Trauma", description: "Motorcycle or vehicular collisions, high falls, or heavy impacts." },
      { name: "Low-Energy Fall (Fragility Fractures)", description: "Simple slips or ground-level falls in elderly patients with underlying osteoporosis (hip, wrist, spine)." },
      { name: "Sports Collisions & Direct Blows", description: "Direct impacts during football, cricket, or athletic activities." },
      { name: "Repetitive Stress (Stress Fractures)", description: "Cumulative micro-trauma in runners or military recruits without an acute fall." }
    ],
    assessment: [
      { step: "Neurovascular Integrity Check", detail: "Immediate assessment of distal pulses, skin color, temperature, and motor/sensory nerve function." },
      { step: "Orthogonal Digital Radiographs", detail: "Obtaining minimum two views (anteroposterior and lateral) including the joints above and below the suspected fracture." },
      { step: "Stability & Displacement Grading", detail: "Assessing whether the fracture is non-displaced, impacted, greenstick, transverse, oblique, or intra-articular." }
    ],
    treatmentApproach: [
      { phase: "Anatomical Immobilization", detail: "Application of well-molded fiberglass casts, rigid splints, or functional braces according to fracture morphology." },
      { phase: "Swelling Control & Elevation", detail: "Strict limb elevation and ice protocols to prevent compartment syndrome and soft tissue blisters." },
      { phase: "Serial Radiographic Monitoring", detail: "Follow-up X-rays at 2, 4, and 6 weeks to confirm proper callus formation and ensure no displacement has occurred." },
      { phase: "Progressive Functional Rehabilitation", detail: "Early active mobilization of adjacent joints followed by phased weight-bearing once union is verified." }
    ],
    whatToExpect: "If an acute fracture is suspected, the limb will be handled with extreme gentleness. Dr. Rao will assess neurovascular signs, review digital imaging, and determine whether conservative casting or surgical stabilization is the safest choice.",
    whenToSeekCare: [
      "Any bone protruding through the skin (Open/Compound Fracture - immediate emergency).",
      "Fingers or toes that turn pale, blue, or severely numb after a fall.",
      "Rapidly expanding, tight, rock-hard swelling in the calf or forearm (Compartment Syndrome).",
      "Significant visible limb deformity."
    ],
    faqs: [
      { q: "How long does a broken bone take to heal?", a: "Most adult fractures require 6 to 12 weeks for solid radiographic union, depending on the specific bone, blood supply, patient age, and nutritional status. Children typically heal significantly faster (3 to 6 weeks)." },
      { q: "What is the difference between a fracture and a break?", a: "Medically, there is no difference. 'Fracture' is simply the clinical term for any break, crack, or disruption in the continuity of a bone." },
      { q: "Can a hairline fracture be missed on an initial X-ray?", a: "Yes. Subtle stress or hairline fractures may not show visible fracture lines on day-one X-rays. They often become clearly visible on repeat X-rays 10 to 14 days later as healing bone callus begins to form." },
      { q: "How do I take care of a fiberglass cast?", a: "Keep the cast completely dry, never push objects down the cast to scratch itchy skin, keep the limb elevated while resting to reduce throbbing, and contact the clinic immediately if the cast feels dangerously tight or rubs painful sores." },
      { q: "Will I need physiotherapy after the cast is removed?", a: "Yes. Muscles naturally atrophy and joints become stiff after several weeks of immobilization. Structured physiotherapy is essential to regain full motion and strength." },
      { q: "How does smoking or tobacco affect bone healing?", a: "Nicotine constricts peripheral blood vessels and significantly impairs osteoblast function, dramatically increasing the risk of delayed union or non-union." }
    ],
    relatedServices: ["sports-injuries", "ankle-pain-treatment", "orthopedic-consultation"]
  },
  {
    slug: "sports-injuries",
    title: "Sports Injuries & Ligament Sprains",
    category: "Bone & Injury Care",
    icon: "Award",
    shortDescription: "Advanced sports medicine evaluation, acute injury triage, ligament tears (ACL/MCL/Ankle), and safe return-to-play rehabilitation.",
    heroImage: "/service/serviceimage-11.webp",
    secondaryImage: "/service/serviceimage-12.webp",
    seo: {
      title: "Sports Injury & Ligament Care | S.N. Health Care",
      description: "Comprehensive athletic injury diagnosis, acute ligament sprain care, and return-to-sport protocols by Dr. P. Y. Srinivasa Rao.",
      keywords: "sports injury clinic, ligament tear, ACL injury, sprained ankle, sports doctor Visakhapatnam"
    },
    introduction: `Athletic participation places extraordinary biomechanical demands on the human musculoskeletal system. Whether you are a competitive athlete, a weekend cricket player, or an enthusiastic runner, sudden deceleration, high-speed pivoting, or direct impact can lead to acute soft-tissue damage, including ligament ruptures, tendon avulsions, muscle tears, and cartilage trauma.

At S.N. Health Care, our sports medicine approach focuses on rapid diagnostic clarity and active recovery. Dr. P. Y. Srinivasa Rao combines functional movement assessments with digital diagnostics to establish precise injury grades.

Our clinical philosophy emphasizes restoring neuromuscular control, joint proprioception, and kinetic chain symmetry so athletes return to their sports with full confidence and minimized re-injury risk.`,
    symptoms: [
      { name: "Audible 'Pop' at Moment of Injury", description: "A distinct snapping sensation commonly reported during acute ACL or Achilles tendon tears." },
      { name: "Rapid Swelling Within Hours", description: "Fast accumulation of joint fluid or blood (hemarthrosis) indicating intra-articular damage." },
      { name: "Joint Giving Way / Instability", description: "Inability to trust the joint during rotational or cutting movements." },
      { name: "Point Tenderness Over Ligament Attachments", description: "Exquisite localized tenderness along the lateral ankle, inner knee, or shoulder." },
      { name: "Loss of Explosive Power", description: "Inability to sprint, jump, or bear full athletic loads without sharp pain." },
      { name: "Inability to Bear Any Steps", description: "Inability to take 4 full steps immediately following an ankle or knee twist.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Non-Contact Deceleration & Pivoting", description: "Sudden change in direction causing rotational knee or ankle collapse." },
      { name: "Direct High-Impact Collisions", description: "Tackles or direct blows causing acromioclavicular separation, contusions, or fractures." },
      { name: "Training Volume Errors", description: "Sudden spikes in mileage, training intensity, or improper footwear leading to stress fractures and tendonitis." }
    ],
    assessment: [
      { step: "On-Field Mechanism Reconstruction", detail: "Detailed breakdown of the exact foot placement, knee angle, and collision forces involved." },
      { step: "Dynamic Stability & Laxity Testing", detail: "Clinical grading of ligament integrity (Grade I microscopic, Grade II partial, Grade III complete)." },
      { step: "Magnetic Resonance Imaging (MRI)", detail: "High-definition evaluation of ligament fibers, meniscal attachments, and bone bruises." }
    ],
    treatmentApproach: [
      { phase: "PEACE & LOVE Modern Acute Protocol", detail: "Protection, Elevation, Avoiding unnecessary anti-inflammatories, Compression, Education, followed by Load, Optimism, Vascularization, and Exercise." },
      { phase: "Functional Bracing & Protected Loading", detail: "Hinged knee or ankle braces allowing sagittal motion while protecting against rotational strain." },
      { phase: "Proprioceptive & Neuromuscular Training", detail: "Balance board and agility drills to re-train joint position sensors and reflexive muscle firing." },
      { phase: "Objective Return-to-Play Criteria", detail: "Limb symmetry testing and functional hop tests prior to clearing full competitive athletic return." }
    ],
    whatToExpect: "Bring your athletic footwear and any protective gear involved in the injury. Dr. Rao will examine joint laxity, compare it with your uninjured limb, and formulate a phased recovery timeline.",
    whenToSeekCare: [
      "Inability to take 4 steps immediately after the injury.",
      "A palpable gap in the Achilles tendon behind the ankle.",
      "Severe joint locking or inability to bend the knee past 90 degrees.",
      "Rapid swelling with extreme joint throbbing."
    ],
    faqs: [
      { q: "What is the difference between a sprain and a strain?", a: "A sprain is a stretch or tear of a ligament (which connects bone to bone). A strain is an injury to a muscle or its attaching tendon (which connects muscle to bone)." },
      { q: "Can an ACL tear be treated without surgery?", a: "Non-copers and athletes engaging in pivoting sports usually benefit from reconstructive surgery. However, less demanding individuals may achieve good stability through intensive hamstring and quadriceps strengthening and functional bracing." },
      { q: "Why is ice no longer recommended indefinitely for acute injuries?", a: "While brief ice application helps with unbearable pain, excessive icing blunts the body's natural inflammatory healing cascade and impairs lymphatic drainage." },
      { q: "When is it safe to return to running after an ankle sprain?", a: "You should only return to running once you can hop on the injured foot without pain, exhibit full range of motion, and demonstrate at least 90% limb symmetry on functional balance tests." },
      { q: "What causes shin splints in runners?", a: "Shin splints (medial tibial stress syndrome) represent repetitive overload of the periosteum where the calf muscles attach to the tibia, typically caused by worn shoes or rapid mileage increases." },
      { q: "How can athletes prevent recurrent hamstring pulls?", a: "Eccentric strength training (such as Nordic hamstring curls), proper hip mobility, and adequate warm-up protocols are clinically proven to slash hamstring re-injury rates." }
    ],
    relatedServices: ["knee-pain-treatment", "ankle-pain-treatment", "tendon-ligament-care"]
  },
  {
    slug: "neck-pain-treatment",
    title: "Neck Pain & Cervical Spine Care",
    category: "Spine Care",
    icon: "ShieldAlert",
    shortDescription: "Specialist diagnosis for cervical spondylosis, tech-neck posture strain, radiating arm pain (cervical radiculopathy), and whiplash.",
    heroImage: "/service/serviceimage-13.webp",
    secondaryImage: "/service/serviceimage-14.webp",
    seo: {
      title: "Neck Pain & Cervical Spine Treatment | S.N. Health Care",
      description: "Evidence-based cervical spine care for neck stiffness, tech neck, and cervical radiculopathy by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "neck pain treatment, cervical spondylosis, tech neck, cervical radiculopathy, spine doctor Visakhapatnam"
    },
    introduction: `The cervical spine comprises seven small vertebrae (C1 to C7) that support the full weight of the human head (approximately 5 kg) while enabling a vast range of motion in multiple planes. In modern society, prolonged forward-head posture—frequently termed 'tech-neck'—multiplies mechanical cervical load up to 25 kg, leading to premature facet joint wear, disc degeneration, and persistent muscle fatigue.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao conducts detailed evaluations to separate simple muscular postural fatigue from genuine cervical disc herniations and nerve root impingements. Radiating symptoms into the shoulder blade, arm, or fingers require diligent neurological tracking to preserve upper limb strength and coordination.

Our clinical focus combines ergonomic spine corrections, deep cervical flexor conditioning, and targeted anti-inflammatory measures to provide durable relief from neck stiffness and cervicogenic headaches.`,
    symptoms: [
      { name: "Occipital & Neck Stiffness", description: "Tight, aching pain at the base of the skull extending across the trapezius muscles." },
      { name: "Radiating Arm Pain & Numbness", description: "Sharp, shooting discomfort traveling down the arm, forearm, or specific fingers (cervical radiculopathy)." },
      { name: "Cervicogenic Headaches", description: "Headaches originating from the upper cervical joints that radiate forward toward the temples or eyes." },
      { name: "Grinding Sensations with Head Turns", description: "Audible crunching or crepitus when turning the neck to reverse a car or look sideways." },
      { name: "Hand Clumsiness or Dropping Objects", description: "Loss of fine motor skills (buttoning shirts, handwriting) indicating spinal cord compression (myelopathy).", isWarning: true }
    ],
    possibleCauses: [
      { name: "Postural Kyphosis ('Tech Neck')", description: "Chronic forward head carriage over smartphones and laptop monitors overworking posterior neck muscles." },
      { name: "Cervical Spondylosis", description: "Age-related degeneration of intervertebral discs and facet joints with osteophyte formation." },
      { name: "Cervical Disc Herniation", description: "Extrusion of disc material compressing C5, C6, or C7 nerve roots." },
      { name: "Whiplash Trauma", description: "Rapid hyperextension-hyperflexion injury to cervical ligaments common in automobile rear-end collisions." }
    ],
    assessment: [
      { step: "Postural & Range of Motion Analysis", detail: "Assessing cervical flexion, extension, lateral rotation, and shoulder girdle elevation." },
      { step: "Spurling's & Cervical Distraction Tests", detail: "Specific clinical maneuvers to assess cervical nerve root compression and relief with gentle traction." },
      { step: "Upper Extremity Reflex & Motor Testing", detail: "Testing biceps (C5), brachioradialis (C6), and triceps (C7) reflexes and grip strength." },
      { step: "Digital Cervical X-Rays / MRI", detail: "Evaluation of cervical lordosis, disc space narrowing, and neural canal dimensions." }
    ],
    treatmentApproach: [
      { phase: "Postural & Ergonomic Overhaul", detail: "Elevating screens to eye level, adjusting chair lumbar support, and avoiding awkward telephone cradling." },
      { phase: "Deep Neck Flexor Strengthening", detail: "Chin tucks and isometric cervical exercises to build muscular endurance in stabilizers." },
      { phase: "Targeted Pharmacotherapy", detail: "Short courses of muscle relaxants and anti-inflammatory compounds for acute spasm relief." },
      { phase: "Soft Tissue & Scapular Mobilization", detail: "Releasing hypertonic upper trapezius and levator scapulae muscles." }
    ],
    whatToExpect: "Dr. Rao will examine your neck mobility, test nerve reflexes in both arms, and evaluate your computer or phone workstation habits. Wear clothing with a comfortable, accessible neckline.",
    whenToSeekCare: [
      "Difficulty walking, unsteady gait, or feeling like your legs are stiff and heavy (Cervical Myelopathy).",
      "Progressive weakness in the hand causing you to repeatedly drop cups or keys.",
      "Neck pain accompanied by high fever, confusion, and stiff neck (requires immediate meningitis rule-out).",
      "Severe neck pain following a high-speed vehicle impact or fall."
    ],
    faqs: [
      { q: "What is tech neck and can it be cured?", a: "Tech neck is posture-induced cervical fatigue from looking down at electronic screens. It is completely reversible with ergonomic adjustments, regular movement breaks, and exercises that strengthen deep cervical flexors." },
      { q: "Can neck arthritis cause dizzy spells?", a: "Yes. Severe cervical spondylosis can irritate sympathetic nerves or compress vertebral arteries during extreme neck turns, producing cervicogenic dizziness." },
      { q: "Should I use a cervical collar for neck pain?", a: "Rigid collars are generally reserved for acute fractures. Soft collars should not be worn for more than 48–72 hours, as prolonged use weakens neck muscles." },
      { q: "What pillow is best for chronic neck pain?", a: "A contour cervical pillow that supports the natural forward curve (lordosis) of the neck while keeping the head aligned with the spine is ideal." },
      { q: "Can neck problems cause tingling in the fingertips?", a: "Yes. Compression of the C6, C7, or C8 nerve roots in the neck commonly produces tingling in the thumb, index, middle, or little fingers." },
      { q: "How often should desk workers take neck breaks?", a: "We recommend a 30-second micro-break every 30 to 45 minutes to perform gentle chin tucks and shoulder rolls." }
    ],
    relatedServices: ["back-pain-treatment", "sciatica-treatment", "shoulder-pain-treatment"]
  },
  {
    slug: "hip-pain-treatment",
    title: "Hip Joint Care & Arthritis Management",
    category: "Joint Care",
    icon: "Activity",
    shortDescription: "Specialist evaluation for deep groin pain, hip osteoarthritis, avascular necrosis (AVN), bursitis, and labral tears.",
    heroImage: "/service/serviceimage-15.webp",
    secondaryImage: "/service/serviceimage-16.webp",
    seo: {
      title: "Hip Pain & Arthritis Management | S.N. Health Care",
      description: "Expert orthopedic evaluation for hip pain, avascular necrosis (AVN), and osteoarthritis by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "hip pain treatment, avascular necrosis hip, hip osteoarthritis, trochanteric bursitis, orthopedic doctor"
    },
    introduction: `The hip joint is a profound ball-and-socket articulation where the femoral head nestles securely inside the pelvic acetabulum, engineered to withstand immense forces during standing, walking, and running. Because hip pain can manifest in diverse anatomical locations—the anterior groin, the lateral thigh, the buttocks, or even radiating down to the knee—patients frequently misunderstand the true source of their discomfort.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao utilizes precise diagnostic tests to differentiate between true intra-articular hip pathology (such as hip osteoarthritis or Avascular Necrosis of the femoral head) and extra-articular conditions such as trochanteric bursitis or lumbar radiculopathy.

Early diagnosis is especially critical in young and middle-aged adults presenting with groin pain, where early-stage Avascular Necrosis (AVN) can often be managed with hip-preserving protocols before femoral head collapse occurs.`,
    symptoms: [
      { name: "Deep Anterior Groin Pain", description: "Aching pain centered in the groin crease, especially noticeable when getting in and out of a car or tying shoes." },
      { name: "Difficulty Putting on Shoes & Socks", description: "Progressive loss of hip internal rotation and flexion making personal foot care difficult." },
      { name: "Lateral Hip Tenderness (Bursitis)", description: "Sharp pain along the outer bony point of the hip aggravated by sleeping on that side." },
      { name: "Start-Up Hip Stiffness", description: "Stiffness upon rising from a seated position that improves after the first dozen steps." },
      { name: "Antalgic Limp (Trendelenburg Gait)", description: "An involuntary limp where the torso sways to unload the painful hip during walking." },
      { name: "Inability to Bear Any Weight After Slip", description: "Shortened, externally rotated leg following a fall (classic sign of femoral neck fracture).", isWarning: true }
    ],
    possibleCauses: [
      { name: "Hip Osteoarthritis", description: "Gradual cartilage degeneration with subchondral cysts, sclerosis, and joint space narrowing." },
      { name: "Avascular Necrosis (AVN) of Femoral Head", description: "Compromise of micro-vascular blood supply to the femoral head, leading to bone marrow edema and potential collapse." },
      { name: "Greater Trochanteric Pain Syndrome (Bursitis)", description: "Inflammation of the bursa and gluteus medius/minimus tendons on the outer hip." },
      { name: "Acetabular Labral Tears", description: "Tears in the fibrocartilaginous labrum that seals the hip socket, common in athletes." }
    ],
    assessment: [
      { step: "Gait & Pelvic Alignment Assessment", detail: "Observing Trendelenburg sign, pelvic obliquity, and leg length discrepancies." },
      { step: "FABER (Patrick's) & FADIR Provocative Tests", detail: "Specific hip positioning maneuvers to stress the joint and reproduce impingement or sacroiliac pain." },
      { step: "Pelvis with Both Hips Digital Radiography", detail: "High-quality standing AP pelvis view to evaluate joint space symmetry and femoral head sphericity." },
      { step: "Pelvic MRI Evaluation", detail: "The gold standard for detecting early Stage I or II Avascular Necrosis long before changes appear on X-rays." }
    ],
    treatmentApproach: [
      { phase: "Targeted Joint Unloading & Cane Use", detail: "Teaching single-point cane use in the contralateral hand to immediately reduce hip joint forces by up to 50%." },
      { phase: "Gluteal & Core Muscle Conditioning", detail: "Strengthening the hip abductors and external rotators to stabilize pelvic tilt during gait." },
      { phase: "Medical Bone Preservation Protocols", detail: "Specialized pharmacotherapy and protective weight-bearing for early-stage avascular necrosis." },
      { phase: "Trochanteric Bursal Infiltration", detail: "Focused anti-inflammatory injection for severe lateral hip pain unresponsive to therapy." }
    ],
    whatToExpect: "Wear loose clothing to allow assessment of hip rotation and gait. Dr. Rao will check leg lengths, evaluate your walking pattern, and review imaging.",
    whenToSeekCare: [
      "Any fall in an older adult followed by immediate inability to stand or walk.",
      "A leg that appears visibly shorter and rotated outward compared to the other leg.",
      "Deep groin pain accompanied by unexplained high fever and chills.",
      "Rapidly deteriorating groin pain in patients with a history of long-term steroid use or heavy alcohol consumption."
    ],
    faqs: [
      { q: "Why does hip arthritis cause pain in the knee?", a: "The hip and knee share overlapping sensory nerve pathways via the obturator and femoral nerves. It is very common for true hip joint arthritis to present primarily as referred pain around the inner knee." },
      { q: "What causes Avascular Necrosis (AVN) of the hip?", a: "AVN occurs when microcirculation to the femoral head is interrupted. Major risk factors include high-dose corticosteroid use, heavy alcohol intake, past trauma, or idiopathic causes." },
      { q: "Can trochanteric bursitis be cured without surgery?", a: "Yes, over 95% of trochanteric bursitis cases resolve with targeted gluteal tendon physical therapy, sleeping position modifications, and occasional local anti-inflammatory injections." },
      { q: "What exercises are safest for arthritic hips?", a: "Swimming, water aerobics, and stationary cycling are outstanding because they provide full range of motion without subjecting the hip to jarring impact." },
      { q: "How can I tell if my hip pain is coming from my back?", a: "Hip joint problems typically cause pain in the deep groin and worsen with leg rotation. Back problems (sciatica) typically start in the lower spine/buttock and radiate down the back or side of the leg." },
      { q: "Does crossing my legs damage my hips?", a: "Habitual leg crossing puts the hip into extreme adduction and internal rotation, which can aggravate hip impingement and trochanteric bursitis over time." }
    ],
    relatedServices: ["knee-pain-treatment", "back-pain-treatment", "osteoarthritis-care"]
  },
  {
    slug: "ankle-pain-treatment",
    title: "Ankle & Foot Injury Assessment",
    category: "Bone & Injury Care",
    icon: "Activity",
    shortDescription: "Specialist diagnosis for ankle sprains, chronic ankle instability, Achilles tendonitis, and plantar fasciitis.",
    heroImage: "/service/serviceimage-17.webp",
    secondaryImage: "/service/serviceimage-18.webp",
    seo: {
      title: "Ankle & Foot Pain Treatment | S.N. Health Care",
      description: "Expert orthopedic care for ankle sprains, Achilles tendonitis, and plantar fasciitis by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "ankle sprain treatment, plantar fasciitis, Achilles tendonitis, twisted ankle, foot specialist Visakhapatnam"
    },
    introduction: `The foot and ankle complex contains 26 bones, 33 joints, and over 100 muscles, tendons, and ligaments that work synchronously to provide both rigid propulsion and compliant shock absorption during human locomotion. Ankle sprains are among the single most common orthopedic injuries; yet, when dismissed as 'simple twists' without proper clinical assessment, up to 40% develop chronic ankle instability, recurrent sprains, or early joint wear.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao emphasizes meticulous ligament grading and functional mechanics. We differentiate between routine lateral ligament sprains, high (syndesmotic) ankle sprains, Achilles tendon disorders, and calcaneal spur pain (plantar fasciitis).

Our restorative protocols focus on regaining full ankle dorsiflexion, restoring neuromuscular ankle evertor strength, and correcting foot pronation to ensure long-term joint health.`,
    symptoms: [
      { name: "Lateral Ankle Swelling & Bruising", description: "Rapid swelling over the anterior talofibular ligament (ATFL) following an inward rolling twist." },
      { name: "Morning Heel Pain (Plantar Fasciitis)", description: "Intense, stabbing pain under the heel during the very first steps out of bed in the morning." },
      { name: "Achilles Tendon Stiffness & Nodules", description: "Aching and thickening along the back of the heel, especially during uphill walking." },
      { name: "Recurrent Ankle Giving Way", description: "Feeling of insecurity when walking on uneven ground or paved cobblestones." },
      { name: "Audible Snap with Immediate Heel Pain", description: "Feeling as if struck in the back of the leg with a stick (Achilles tendon rupture sign).", isWarning: true }
    ],
    possibleCauses: [
      { name: "Inversion Ankle Sprain (ATFL / CFL Tear)", description: "Inward rolling of the foot tearing outer ankle ligaments." },
      { name: "High Ankle (Syndesmotic) Sprain", description: "Rotational twisting of the leg causing injury to the ligaments holding the tibia and fibula together." },
      { name: "Plantar Fasciitis", description: "Micro-tearing and chronic inflammation of the thick plantar aponeurosis supporting the foot arch." },
      { name: "Achilles Tendinopathy", description: "Repetitive strain and micro-damage to the body's strongest tendon." }
    ],
    assessment: [
      { step: "Ottawa Ankle Rules Application", detail: "Standardized clinical criteria to determine whether X-rays are strictly necessary, preventing unnecessary radiation." },
      { step: "Anterior Drawer & Talar Tilt Tests", detail: "Gentle manual stress testing to evaluate mechanical laxity of torn ligaments." },
      { step: "Weight-Bearing Foot & Ankle X-Rays", detail: "Evaluating malleolar fractures, talar dome osteochondral lesions, and arch structure." }
    ],
    treatmentApproach: [
      { phase: "Semi-Rigid Functional Ankle Bracing", detail: "Stabilizing inversion/eversion while encouraging healthy sagittal walking motion." },
      { phase: "Peroneal & Calf Muscle Strengthening", detail: "Strengthening the outer dynamic muscular stabilizers of the ankle." },
      { phase: "Plantar Fascia Stretching Protocols", detail: "Targeted calf and plantar tissue stretching routines combined with silicone heel cups." },
      { phase: "Single-Leg Balance Proprioception", detail: "Wobble board training to re-educate fast-acting balance reflexes." }
    ],
    whatToExpect: "Wear socks and footwear that are easy to remove. Dr. Rao will examine both feet, inspect your everyday walking shoes for uneven tread wear, and test balance.",
    whenToSeekCare: [
      "Inability to bear any weight on the foot immediately after the injury.",
      "A palpable indentation or hollow gap along the Achilles tendon behind the heel.",
      "Numbness or pins and needles spreading across the toes.",
      "Severe bony tenderness along the back edges of the ankle bones (malleoli)."
    ],
    faqs: [
      { q: "Why does my ankle feel loose months after an old sprain?", a: "Torn ligaments that heal without adequate proprioceptive rehabilitation leave the joint with sluggish balance reflexes, leading to chronic functional ankle instability. Targeted wobble board exercises can restore control." },
      { q: "How can I get rid of morning heel pain from plantar fasciitis?", a: "Stretching the calf and plantar fascia before getting out of bed, wearing cushioned footwear with arch support, avoiding barefoot walking on hard tile floors, and night splints provide significant relief." },
      { q: "Can an Achilles tendon tear without warning?", a: "Most Achilles ruptures occur in individuals with pre-existing, often asymptomatic micro-degeneration who suddenly accelerate or jump during sports." },
      { q: "Are high ankle sprains worse than regular ankle sprains?", a: "Yes. High ankle sprains involve the syndesmosis ligaments between the tibia and fibula. They take roughly twice as long to heal and require careful stabilization." },
      { q: "Is walking barefoot good for flat feet?", a: "Walking barefoot on hard indoor surfaces can aggravate plantar fasciitis and tendonitis in flat-footed individuals. Supportive indoor footwear is generally recommended." },
      { q: "When should I see an orthopedic doctor for a twisted ankle?", a: "You should see a doctor if you cannot bear weight, notice severe bruising within an hour, or if swelling fails to improve after 3 to 4 days." }
    ],
    relatedServices: ["sports-injuries", "fracture-assessment", "tendon-ligament-care"]
  },
  {
    slug: "disc-disorders",
    title: "Disc Herniation & Spine Decompression",
    category: "Spine Care",
    icon: "ShieldAlert",
    shortDescription: "Specialist non-surgical care for lumbar and cervical disc bulges, annular tears, disc desiccation, and nerve root decompression.",
    heroImage: "/service/serviceimage-19.webp",
    secondaryImage: "/service/serviceimage-20.webp",
    seo: {
      title: "Disc Bulge & Spine Decompression | S.N. Health Care",
      description: "Non-surgical treatments for herniated discs, slipped discs, and spine compression by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "herniated disc treatment, slipped disc doctor, disc bulge, spine decompression, Visakhapatnam orthopedic"
    },
    introduction: `Intervertebral discs are sophisticated hydraulic cushions positioned between adjacent vertebrae. Each disc consists of two primary anatomical zones: the tough, layered outer ring (annulus fibrosus) and the gelatinous, water-rich central core (nucleus pulposus). With repetitive flexion loads, rotational lifting, or progressive dehydration (disc desiccation), tears can develop in the annulus, allowing the nuclear material to bulge or herniate outward toward spinal nerves.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao focuses on demystifying disc pathology. Patients are often terrified when an MRI report reads 'disc bulge' or 'extrusion', assuming that spine surgery is immediately required.

In reality, the human body possesses a remarkable innate capacity to resorb herniated disc material. Through evidence-based conservative spine decompression, mechanical direction-preference exercises, and neuro-protective protocols, the vast majority of disc patients achieve complete resolution of symptoms without surgery.`,
    symptoms: [
      { name: "Position-Dependent Pain", description: "Sharp increases in pain when bending forward, sitting, coughing, or sneezing, with relief upon walking." },
      { name: "Radiating Radicular Symptoms", description: "Sharp electric sensations traveling down the leg (lumbar) or down the arm (cervical)." },
      { name: "Localized Lumbar or Neck Spasm", description: "Severe defensive muscle guarding locking the spinal column." },
      { name: "Sensory Loss / Numbness", description: "Patches of reduced sensation along specific dermatomes in the foot or hand." },
      { name: "Progressive Motor Weakness", description: "Weakness during toe-walking or heel-walking indicating significant nerve root compromise.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Repetitive Lumbar Flexion with Rotation", description: "Lifting heavy objects while twisting the torso, placing maximal tensile stress on posterolateral disc fibers." },
      { name: "Age-Related Disc Desiccation", description: "Loss of proteoglycans and water content in discs over time, reducing shock-absorbing capability." },
      { name: "Sedentary Desk Ergonomics", description: "Sustained slouched sitting pushing nuclear disc contents posteriorly toward the spinal canal." }
    ],
    assessment: [
      { step: "Directional Preference Testing (McKenzie Assessment)", detail: "Identifying whether spinal extension or flexion movements reduce ('centralize') radiating symptoms." },
      { step: "Detailed Neuromotor Examination", detail: "Testing motor power in key muscle groups (quadriceps, tibialis anterior, extensor hallucis longus, gastrocnemius)." },
      { step: "MRI Correlation Analysis", detail: "Differentiating between diffuse annular bulges, focal protrusions, extrusions, and sequestered fragments." }
    ],
    treatmentApproach: [
      { phase: "Symptom Centralization Protocols", detail: "Prone press-ups or extension postures designed to shift hydraulic pressure away from the irritated nerve." },
      { phase: "Targeted Anti-Inflammatory Medication", detail: "Short-term medications to shrink inflammatory swelling around the impinged nerve root." },
      { phase: "Spine-Sparing Movement Education", detail: "Teaching the 'hip hinge' technique to replace spinal bending during everyday tasks." },
      { phase: "Gradual Decompression & Core Stabilization", detail: "Gentle axial decompression and endurance exercises for abdominal and back stabilizers." }
    ],
    whatToExpect: "Dr. Rao will perform dynamic movement tests to see which postures relieve your symptoms and review your MRI images slice by slice with you.",
    whenToSeekCare: [
      "Sudden numbness around your groin or buttocks area (saddle anesthesia).",
      "Loss of voluntary control over bowel or bladder function.",
      "Foot drop where the front of the foot catches on the floor when walking.",
      "Unrelenting pain that does not decrease in any resting posture."
    ],
    faqs: [
      { q: "Can a herniated disc really heal on its own?", a: "Yes. In fact, larger herniations (extrusions) are often recognized by the body as foreign tissue and broken down via macrophage phagocytosis faster than smaller bulges." },
      { q: "What does 'centralization of pain' mean?", a: "Centralization occurs when pain retreats out of the leg or arm and moves back toward the center of the spine. This is the single strongest clinical indicator of good non-surgical recovery." },
      { q: "Is sitting or standing better for a slipped disc?", a: "Standing generally exerts far less hydraulic pressure on lumbar discs than sitting. If you must sit, use a firm lumbar roll to maintain your natural lumbar curve." },
      { q: "Does every disc bulge show symptoms?", a: "No! Many studies show that up to 30–50% of completely pain-free adults have disc bulges on MRI. We treat the patient's symptoms and examination, not just an MRI picture." },
      { q: "Are twisting exercises safe for someone with a disc issue?", a: "Aggressive twisting should be avoided during the acute and subacute recovery phases, as rotational torque places the greatest shear stress on the annulus fibrosus." },
      { q: "How long does disc pain take to settle?", a: "Most patients experience substantial relief within 4 to 8 weeks with structured conservative care." }
    ],
    relatedServices: ["back-pain-treatment", "sciatica-treatment", "neck-pain-treatment"]
  },
  {
    slug: "osteoarthritis-care",
    title: "Osteoarthritis & Joint Preservation",
    category: "Joint Care",
    icon: "Activity",
    shortDescription: "Comprehensive long-term strategies for joint cartilage health, weight modulation, viscosupplementation, and mobility preservation.",
    heroImage: "/service/serviceimage-21.webp",
    secondaryImage: "/service/serviceimage-22.webp",
    seo: {
      title: "Osteoarthritis Treatment & Joint Preservation | S.N. Health Care",
      description: "Non-surgical osteoarthritis management, cartilage preservation, and joint mobility care by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "osteoarthritis treatment, joint preservation doctor, cartilage wear, knee arthritis care, Visakhapatnam orthopedic"
    },
    introduction: `Osteoarthritis (OA) is the most prevalent chronic joint condition worldwide, characterized by the progressive structural breakdown of articular cartilage, changes in subchondral bone, formation of osteophytes (bone spurs), and low-grade synovial inflammation. While historically viewed as an unavoidable 'wear-and-tear' consequence of aging, modern orthopedic science recognizes osteoarthritis as an active, biologically responsive disease process that can be effectively managed, decelerated, and mitigated.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao champions proactive joint preservation. We believe that an osteoarthritis diagnosis should never be met with passive resignation or an immediate rush to surgery.

By addressing the biomechanical loading factors, strengthening the muscular shock absorbers surrounding the joint, utilizing evidence-based anti-inflammatory and lubricating interventions, and modifying lifestyle habits, patients can preserve their natural joints and enjoy an active, fulfilling life.`,
    symptoms: [
      { name: "Progressive Joint Aching", description: "Deep, nagging joint discomfort that builds up throughout the day after physical activity." },
      { name: "Morning Gel Stiffness", description: "Transient joint stiffness upon waking that eases within 20–30 minutes of gentle movement." },
      { name: "Loss of Joint Flexibility", description: "Gradual reduction in the ability to fully bend or straighten the affected knee, hip, or fingers." },
      { name: "Crepitus & Grating Noise", description: "Sensory or audible grinding vibrations during joint movement." },
      { name: "Bony Enlargement (Heberden's/Bouchard's Nodes)", description: "Visible hard swellings around finger joints or knee joint margins." },
      { name: "Rapid Severe Joint Deformity", description: "Sudden angular collapse of the joint with severe bone friction.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Cumulative Biomechanical Stress", description: "Decades of repetitive loading, occupational kneeling, or heavy lifting." },
      { name: "Previous Joint Trauma (Post-Traumatic OA)", description: "Past ligament tears, fractures, or meniscal surgeries accelerating joint wear." },
      { name: "Obesity & Metabolic Factors", description: "Excess mechanical load combined with systemic low-grade adipokine inflammation." },
      { name: "Genetic Susceptibility & Joint Alignment", description: "Inherited variations in cartilage resilience and congenital limb alignment (knock-knees or bow-legs)." }
    ],
    assessment: [
      { step: "Kellgren-Lawrence Radiographic Grading", detail: "Systematic classification of joint space narrowing, subchondral sclerosis, and osteophyte size from Grade 1 (minimal) to Grade 4 (severe)." },
      { step: "Functional Mobility & Stair Climb Test", detail: "Objective assessment of walking cadence, chair-stand ability, and joint stability." },
      { step: "Joint Line Palpation & Effusion Check", detail: "Detecting active synovitis versus bony osteophyte tenderness." }
    ],
    treatmentApproach: [
      { phase: "Low-Impact Cartilage Conditioning", detail: "Prescribing low-impact aerobic activities (cycling, pool walking) to stimulate synovial fluid circulation." },
      { phase: "Quadriceps & Gluteal Muscle Strengthening", detail: "Building muscular buffers that absorb ground impact before it strikes the cartilage." },
      { phase: "Viscosupplementation & Targeted Injections", detail: "High-molecular-weight hyaluronic acid injections to restore lubricating cushion." },
      { phase: "Load-Shifting Braces & Footwear Modification", detail: "Unloader braces and shock-absorbing footwear to redistribute weight away from worn compartments." }
    ],
    whatToExpect: "Dr. Rao will review your joint X-rays with you, measure joint range of motion, and construct a multi-step management plan tailored to your functional goals.",
    whenToSeekCare: [
      "Severe joint pain that disturbs sleep every night.",
      "Joint swelling that is intensely hot, red, and accompanied by fever.",
      "Sudden inability to bear weight on the joint.",
      "Rapidly developing knock-knee or bow-leg deformity."
    ],
    faqs: [
      { q: "Can worn-out cartilage grow back?", a: "Articular cartilage has limited intrinsic healing capacity due to lack of direct blood supply. However, joint preservation therapies can halt further loss, thicken surrounding synovial fluid, and build muscular support that virtually eliminates pain." },
      { q: "Is walking good or bad for knee osteoarthritis?", a: "Walking on flat, cushioned surfaces is beneficial. Joint cartilage requires cyclical compression and relaxation to absorb nutrients from synovial fluid. Sedentary behavior accelerates joint stiffening." },
      { q: "Do glucosamine and chondroitin supplements work?", a: "Clinical studies show mixed results. Some patients report mild symptom improvement, but they do not rebuild lost cartilage. Targeted exercise and weight modulation offer vastly superior clinical evidence." },
      { q: "When is joint replacement truly necessary?", a: "Joint replacement is reserved for end-stage Grade 4 bone-on-bone arthritis where severe, unremitting pain destroys daily quality of life and all conservative treatments have failed." },
      { q: "Does cold weather actually make arthritis worse?", a: "Changes in barometric pressure can cause joint tissues and capsules to expand slightly, which can heighten nerve sensitivity in arthritic joints." },
      { q: "How much does weight loss help knee osteoarthritis?", a: "Losing just 10% of body weight can reduce knee arthritis pain by up to 50% and dramatically slow structural disease progression." }
    ],
    relatedServices: ["knee-pain-treatment", "hip-pain-treatment", "orthopedic-consultation"]
  },
  {
    slug: "tendon-ligament-care",
    title: "Tendon & Ligament Disorders",
    category: "Musculoskeletal Care",
    icon: "Activity",
    shortDescription: "Specialist diagnosis for chronic tendinopathy, ligament sprains, tennis elbow, golfer's elbow, and overuse syndromes.",
    heroImage: "/service/serviceimage-23.webp",
    secondaryImage: "/service/serviceimage-24.webp",
    seo: {
      title: "Tendon & Ligament Treatment | S.N. Health Care",
      description: "Comprehensive orthopedic care for tendonitis, chronic tendinopathy, and ligament sprains by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "tendonitis treatment, tendinopathy doctor, ligament injury, tennis elbow, orthopedic specialist"
    },
    introduction: `Tendons connect muscles to bones, transmitting explosive force to produce joint movement, while ligaments connect bone to bone, providing static stability. Both are composed of dense, parallel collagen fibers designed to withstand tremendous tensile stress. However, because both tendons and ligaments have relatively sparse vascularity compared to muscle, they are prone to chronic overuse injuries (tendinopathy) and slow healing after acute sprains.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao utilizes modern musculoskeletal science to manage tendon and ligament conditions. We understand that chronic tendinopathy is primarily a degenerative breakdown (tendinosis) rather than simple acute inflammation. 

Consequently, passive rest alone rarely solves tendon problems. We employ progressive eccentric loading, biomechanical correction, and targeted modalities to stimulate collagen remodeling and restore tissue resilience.`,
    symptoms: [
      { name: "Localized Tendon Tenderness", description: "Point tenderness directly over the tendon body or its bony insertion site." },
      { name: "Warm-Up Phenomenon", description: "Pain that feels stiff at the start of an activity, eases during the session, but aches intensely afterward." },
      { name: "Thickening or Nodularity", description: "Palpable firmness or nodular thickening along the tendon fibers." },
      { name: "Morning Stiffness & Loss of Spring", description: "Stiffness upon waking that feels tight until warmed up." },
      { name: "Sudden Loss of Tendon Function", description: "Sudden inability to pull against resistance (suggesting complete rupture).", isWarning: true }
    ],
    possibleCauses: [
      { name: "Sudden Spikes in Training Load", description: "Rapid increases in running mileage, lifting weight, or repetitive work tasks exceeding tissue capacity." },
      { name: "Poor Biomechanical Form", description: "Faulty sports techniques or workstation ergonomics placing uneven shear stress on tendons." },
      { name: "Inadequate Recovery Periods", description: "Lack of rest between high-intensity sessions preventing healthy collagen synthesis." }
    ],
    assessment: [
      { step: "Palpation & Load Tolerance Testing", detail: "Systematic palpation along the tendon length and isometric load testing to reproduce symptoms." },
      { step: "High-Resolution Musculoskeletal Ultrasound", detail: "Assessing tendon thickness, hypoechoic areas of collagen disorganization, and neovascularity." },
      { step: "Biomechanical Kinetic Chain Analysis", detail: "Identifying upstream or downstream joint stiffness causing compensatory tendon overload." }
    ],
    treatmentApproach: [
      { phase: "Progressive Heavy Slow Resistance (HSR)", detail: "Controlled heavy loading to stimulate tenocyte activity and encourage healthy collagen alignment." },
      { phase: "Load Management & Activity Modification", detail: "Temporarily swapping high-impact energy-storage activities with low-impact cross-training." },
      { phase: "Biomechanical Splints & Counterforce Straps", detail: "Applying forearm or patellar tendon straps to redistribute peak forces away from painful insertions." }
    ],
    whatToExpect: "Dr. Rao will palpate the affected tendon, test muscle strength under resistance, and design a structured loading program. Bring details of your regular exercise routine.",
    whenToSeekCare: [
      "A sudden 'pop' or snap followed by immediate loss of muscle function.",
      "A visible gap or bunching up of a muscle belly (e.g., Popeye sign in biceps).",
      "Severe night pain that prevents sleep.",
      "Swelling that turns red, hot, and throbbed."
    ],
    faqs: [
      { q: "Why doesn't rest cure chronic tendonitis?", a: "Tendons adapt to load. While complete rest may temporarily ease pain, it also decreases the tendon's load capacity. When you resume activity, the deconditioned tendon flares right up again. Progressive loading is necessary to stimulate collagen repair." },
      { q: "What is the difference between tendonitis and tendinosis?", a: "Tendonitis involves acute inflammatory cells, usually seen in the first few days of an injury. Tendinosis is a chronic degenerative breakdown of collagen fibers without inflammatory cells, which requires active loading rather than anti-inflammatories." },
      { q: "How long does a chronic tendon injury take to heal?", a: "Tendons turn over collagen very slowly. A structured rehabilitation program typically requires 12 weeks to 6 months of consistent loading to achieve durable tissue remodeling." },
      { q: "Are stretching exercises good for painful tendons?", a: "Aggressive stretching can actually compress a diseased tendon against its bony insertion point (compressive tendinopathy). Controlled isometric holds and slow loading are generally preferred." },
      { q: "Can fluoroquinolone antibiotics cause tendon damage?", a: "Yes. Certain antibiotics (such as ciprofloxacin and levofloxacin) carry known risks of tendon toxicity and can precipitate sudden Achilles tendon ruptures." },
      { q: "When can I resume sports after a tendon injury?", a: "You can resume sports once the tendon tolerates heavy load without post-activity pain persisting into the next morning." }
    ],
    relatedServices: ["sports-injuries", "elbow-wrist-pain", "knee-pain-treatment"]
  },
  {
    slug: "elbow-wrist-pain",
    title: "Elbow & Wrist Pain Management",
    category: "Musculoskeletal Care",
    icon: "Activity",
    shortDescription: "Specialist diagnosis for tennis elbow (lateral epicondylitis), golfer's elbow, carpal tunnel syndrome, and wrist sprains.",
    heroImage: "/service/serviceimage-25.webp",
    secondaryImage: "/service/serviceimage-26.webp",
    seo: {
      title: "Elbow & Wrist Pain Treatment | S.N. Health Care",
      description: "Expert orthopedic care for tennis elbow, carpal tunnel syndrome, and wrist sprains by Dr. P. Y. Srinivasa Rao in Visakhapatnam.",
      keywords: "tennis elbow treatment, carpal tunnel syndrome, golfer's elbow, wrist pain doctor, orthopedic clinic"
    },
    introduction: `The elbow and wrist function as an integrated upper limb kinetic unit responsible for positioning and stabilizing the hand in space. From typing on keyboards and handling smartphones to swinging a cricket bat or performing domestic chores, repetitive wrist flexion, extension, and forearm rotation subject the epicondyles of the elbow and the carpal tunnel of the wrist to significant mechanical stress.

At S.N. Health Care, Dr. P. Y. Srinivasa Rao provides precise diagnosis for upper extremity complaints. We frequently see patients who have endured months of frustrating forearm pain or nocturnal hand numbness because their condition was treated generically.

By isolating specific tendon origins (extensor carpi radialis brevis in tennis elbow) and conducting targeted provocative nerve tests (Phalen's and Tinel's in carpal tunnel syndrome), we design tailored ergonomic and clinical interventions that deliver genuine lasting relief.`,
    symptoms: [
      { name: "Outer Elbow Pain with Grip", description: "Sharp, burning pain on the outside of the elbow exacerbated by shaking hands, lifting a kettle, or turning a door handle." },
      { name: "Nocturnal Hand Tingling (Carpal Tunnel)", description: "Waking up with numbness or 'pins and needles' in the thumb, index, and middle fingers requiring hand shaking." },
      { name: "Inner Elbow Pain (Golfer's Elbow)", description: "Tenderness along the medial epicondyle triggered by wrist flexing or gripping." },
      { name: "Wrist Stiffness & Dorsal Aching", description: "Aching across the wrist joint line after typing or computer mouse use." },
      { name: "Thenar Muscle Wasting", description: "Flattening of the muscular fleshy pad at the base of the thumb accompanied by frequent dropped items.", isWarning: true }
    ],
    possibleCauses: [
      { name: "Lateral Epicondylalgia (Tennis Elbow)", description: "Micro-tearing and tendinosis at the common extensor tendon origin." },
      { name: "Carpal Tunnel Syndrome", description: "Compression of the median nerve within the narrow carpal tunnel beneath the transverse carpal ligament." },
      { name: "De Quervain's Tenosynovitis", description: "Inflammation of the tendon sheath surrounding thumb abductor and extensor tendons." },
      { name: "Wrist Ganglion Cysts", description: "Fluid-filled swellings arising from joint capsules or tendon sheaths." }
    ],
    assessment: [
      { step: "Cozen's & Mill's Tests", detail: "Resisted wrist extension tests to isolate lateral epicondyle tendinopathy." },
      { step: "Phalen's & Tinel's Median Nerve Tests", detail: "Wrist flexion and nerve tapping maneuvers to reproduce carpal tunnel paresthesias." },
      { step: "Finkelstein's Test", detail: "Specific thumb tucking maneuver to diagnose De Quervain's tenosynovitis." }
    ],
    treatmentApproach: [
      { phase: "Ergonomic Workstation Re-Design", detail: "Vertical ergonomic mouse, keyboard palm rests, and neutral wrist typing posture." },
      { phase: "Neutral Wrist Night Splinting", detail: "Immobilizing the wrist in neutral (0–15 degrees) position at night to reduce carpal tunnel pressure." },
      { phase: "Forearm Tendon Eccentric Strengthening", detail: "Tyler Twist exercises using flexible resistance bars to remodel extensor tendons." },
      { phase: "Targeted Infiltration / Release", detail: "Minimally invasive tendon injections or referral when severe axonal loss is present." }
    ],
    whatToExpect: "Dr. Rao will test your grip strength, evaluate sensation in all five fingers, and palpate the elbow epicondyles. Bring any computer workstation photos if desk work triggers symptoms.",
    whenToSeekCare: [
      "Visible wasting (atrophy) of the thumb muscles.",
      "Constant numbness in the fingers that persists day and night.",
      "Inability to hold light cups or turn keys due to weakness.",
      "Severe wrist deformity following an outstretched fall."
    ],
    faqs: [
      { q: "Can you get tennis elbow without ever playing tennis?", a: "Yes! In fact, over 95% of tennis elbow cases occur in non-tennis players. Repetitive computer mouse use, plumbing, gardening, cooking, and assembly line work are the most common triggers." },
      { q: "Why does carpal tunnel wake me up in the middle of the night?", a: "Many people naturally sleep with their wrists curled inward (flexed). Wrist flexion elevates carpal tunnel pressure up to 80 mmHg, cutting off blood supply to the already compressed median nerve." },
      { q: "Do counterforce elbow straps actually help?", a: "Yes. An elbow brace worn 2 inches below the painful point acts as a mechanical shock absorber, dispersing peak pulling forces before they reach the injured tendon insertion." },
      { q: "What is De Quervain's tenosynovitis?", a: "It is inflammation of the tendons on the thumb side of the wrist, very common in new mothers lifting babies and frequent smartphone texters." },
      { q: "Can carpal tunnel syndrome be cured without surgery?", a: "Mild to moderate carpal tunnel syndrome frequently resolves with neutral night splints, ergonomic adjustments, and targeted anti-inflammatory measures." },
      { q: "How long does tennis elbow take to heal completely?", a: "Most cases resolve within 6 to 12 months with dedicated eccentric exercises and load modification." }
    ],
    relatedServices: ["tendon-ligament-care", "shoulder-pain-treatment", "orthopedic-consultation"]
  },
  {
    slug: "orthopedic-consultation",
    title: "Specialist Orthopedic Consultation",
    category: "Specialist Consultation",
    icon: "Award",
    shortDescription: "Comprehensive diagnostic evaluation, second opinions, treatment roadmaps, and preventive bone health planning by Dr. P. Y. Srinivasa Rao.",
    heroImage: "/service/serviceimage-27.webp",
    secondaryImage: "/service/serviceimage-28.webp",
    seo: {
      title: "Specialist Orthopedic Consultation | S.N. Health Care",
      description: "Book an in-depth musculoskeletal consultation with Dr. P. Y. Srinivasa Rao. Evidence-based second opinions, diagnosis, and care plans.",
      keywords: "orthopedic consultation, bone specialist appointment, second opinion orthopedic, Dr P Y Srinivasa Rao Visakhapatnam"
    },
    introduction: `A successful orthopedic outcome begins with an unhurried, comprehensive clinical consultation. In a healthcare landscape increasingly dominated by rapid 3-minute visits and automated diagnostic algorithms, S.N. Health Care remains committed to old-fashioned clinical excellence combined with modern evidence-based medicine.

When you consult Dr. P. Y. Srinivasa Rao, you receive the full undivided attention of a seasoned orthopedic surgeon with over 16 years of clinical experience. Every consultation is structured around listening carefully to your health journey, understanding how pain affects your family and work life, conducting an exhaustive physical examination, and reviewing your imaging studies collaboratively.

Whether you are seeking clarity on a new joint ache, looking for a conservative alternative to recommended surgery, or planning long-term bone health management, our consultations provide the knowledge and confidence you need to take control of your recovery.`,
    symptoms: [
      { name: "Unexplained Joint or Bone Aching", description: "Persistent musculoskeletal discomfort without clear cause lasting more than two weeks." },
      { name: "Uncertainty Over Previous Diagnosis", description: "Desire for an unbiased, conservative second opinion before undergoing surgical procedures." },
      { name: "Post-Injury Lingering Stiffness", description: "Joints that never fully regained motion or strength following past sprains or fractures." },
      { name: "Preventive Bone Health Evaluation", description: "Assessment of osteoporosis risk, post-menopausal bone density, and vitamin D balance." },
      { name: "General Movement Limitations", description: "Difficulty climbing stairs, walking comfortably, or maintaining balance." }
    ],
    possibleCauses: [
      { name: "Multiple Joint Wear / Polyarthritis", description: "Systemic degenerative or inflammatory conditions affecting more than one joint." },
      { name: "Postural & Occupational Stress", description: "Long-term postural strain from prolonged desk work, driving, or heavy labor." },
      { name: "Osteopenia & Osteoporosis", description: "Silent loss of bone mineral density predisposing to fragility fractures." }
    ],
    assessment: [
      { step: "360-Degree Musculoskeletal History", detail: "Reviewing previous injuries, surgical history, medications, occupational postures, and lifestyle." },
      { step: "Hands-On Clinical Examination", detail: "Detailed joint palpation, range of motion measurements, stability testing, and neurological reflexes." },
      { step: "Collaborative Imaging Review", detail: "Viewing your digital X-rays and MRI scans together on clinic monitors with clear plain-language explanations." },
      { step: "Personalized Action Roadmap", detail: "A written individualized treatment strategy detailing home exercises, medications, lifestyle steps, and follow-up milestones." }
    ],
    treatmentApproach: [
      { phase: "Conservative First Philosophy", detail: "Focusing on non-invasive rehabilitation, exercise therapy, and joint preservation." },
      { phase: "Clear Patient Education", detail: "Ensuring you understand exactly why your pain occurs and what actions you can take." },
      { phase: "Transparent Medical Communication", detail: "Honest discussion of treatment options, expected timelines, and realistic outcomes." }
    ],
    whatToExpect: "Please arrive 10 minutes before your appointment time. Bring all previous medical records, discharge summaries, blood tests, X-ray films, and MRI discs. Wear comfortable, loose clothing that allows easy examination of the affected joints.",
    whenToSeekCare: [
      "Any sudden, severe pain following trauma.",
      "Joint pain accompanied by unexplained high fever or night sweats.",
      "Inability to bear weight or move a limb.",
      "Pain that progressively wakes you from deep sleep."
    ],
    faqs: [
      { q: "How do I book an appointment with Dr. P. Y. Srinivasa Rao?", a: "You can call our clinic directly at 09090595901, send a message on WhatsApp via the button on this site, or walk into S.N. Health Care during regular consultation hours." },
      { q: "What should I bring to my first orthopedic consultation?", a: "Please bring any previous X-rays, MRI scans, CT scans, blood test reports, a list of current medications, and past medical summaries." },
      { q: "Does Dr. Rao offer second opinions on proposed surgeries?", a: "Yes. Many patients visit S.N. Health Care specifically for an independent evaluation to determine whether conservative, non-surgical alternatives are available." },
      { q: "How long does a typical consultation take?", a: "We dedicate approximately 15 to 30 minutes for a comprehensive initial consultation to ensure thorough examination and clear patient discussion." },
      { q: "Are emergency consultations accepted?", a: "Yes. Acute trauma, severe joint locks, and urgent injuries are prioritized during clinic working hours." },
      { q: "Does the clinic provide on-site digital X-rays?", a: "Digital X-ray imaging and basic diagnostic reviews are coordinated seamlessly during your clinic visit." }
    ],
    relatedServices: ["knee-pain-treatment", "back-pain-treatment", "osteoarthritis-care"]
  }
];
